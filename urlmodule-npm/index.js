//URL -> uniform resource locator

// https://www.piyushgarg.dev/  -> protocol ->/ domain ->/ path

// nested path -> /path/1
// query parameter -> path?query1=1&query2=2

// in node when we use http.createserver it doesn't understand the query paraments
// like we have /about but when we hit /about?search=name  -> it gives you not found in node i will check for expres
// for that you need to use url package
// path = url.parse(request.url,true) -> now using path.pathname you get /about and using path.query get search=name
// i will check for express is express automaticcaly suports it or not

// if you pass true in url.parse you get a query object otherwise in string name=harsh&age=21 like this



