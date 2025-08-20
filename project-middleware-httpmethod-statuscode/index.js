const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app = express();
const PORT = 8000;

app.use((request, response, next) => {
    console.log(request)
    fs.appendFile('./log.txt', `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${request.method} ${request.path} ${request.ip}\n`, (error) => {
        if (!error) {
            next()

        }
    })
})

// parse data that comes from client and Content-type : application/json
app.use(express.json())

// for form data that comes from SSR server
app.use(express.urlencoded({ extended: true }))

// GET /api/users -> all users
// GET /api/users/1 -> get user by id
// GET /api/users/2 -> get user by id

// POST /api/user -> create new user

// PATCH /api/user/1 -> update user

// DELETE /api/user/1 -> delete user

// withour /api -> returns html okay

// goto mockaroo.com -> genrate data


// json response
app.get('/api/users', (request, response) => {
    return response.status(200).json(users)
})


app.post('/api/user', (request, response) => {
    const data = request.body;
    if (!data.first_name || data.last_name || data.email || data.gender || data.job_title) return response.status(400).json({ message: "Fields are missing" })
    const dataWithId = { id: users.length + 1, ...data }
    users.push(dataWithId);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error) => {
        if (!error) {
            return response.status(201).json({
                success: true,
                data: dataWithId,
                message: 'User added successfully'
            })
        }
    })
})

app.route('/api/users/:id').get((request, response) => {
    const id = request.params.id;
    // take care id is in string formate that you get from params
    // console.log(typeof(id));
    const index = users.findIndex((user) => user.id === Number(id))
    // console.log(index)
    if (index === -1) {
        return response.status(404).json({ message: "Data not found" })
    }
    if (index > -1) {
        return response.status(200).json(users[index])
    }
}).patch((request, response) => {

}).delete((request, response) => {

})

// server side rendering -> html
app.get('/users', (request, response) => {

    const html = `
    <ul>
     ${users.map(user => `<li>${user.email}</li>`).join('')}
    </ul>
    `
    return response.send(html)
})


app.listen(PORT, () => {
    console.log(`SERVER STARTED AT http://127.0.0.1:${PORT}`)
})