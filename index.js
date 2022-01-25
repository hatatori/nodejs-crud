const fs = require('fs')
const http = require('http')
var crud = require('./crud')

http.createServer(function(req,res){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    
    link = {
        url: req.url, 
        query: req.url.split("?")[1], 
        p1: req.url.split("/")[1].split("?")[0], 
        p2: req.url.split("?")[0].split("/").slice(-2).join("/"), 
        qt: req.url.split("/").length
    }

    // read
    if( link.p1 == 'list' ){
        if(link.qt == 4){
            path = req.url.split("/").slice(-2)
            res.end(JSON.stringify(crud.data_json.find(e=> e[path[0]] == path[1] )))
            return true
        }
        crud.data_json = JSON.parse(fs.readFileSync('./'+crud.filename,'utf-8'))
        
        res.write(JSON.stringify(crud.data_json))
        res.end()
        return true
    }    

    // update
    if( link.p1 == 'update' ){
        path = []
        path[0] = link.p2
        path[1] = crud.queryStringToObj(link.query)
        update(path[0],path[1])
        res.write("Updated")
        res.end()
        return true
    }

    // del
    if( link.p1 == 'del' ){
        del(link.p2)
        res.write("Deleted")
        res.end()
        return true
    }

    // create
    if( link.p1 == 'create' ){
        crud.create(crud.queryStringToObj(link.query))
        res.write("Created")
        res.end()
        return true
    }

    res.write("ok")
    res.end()

}).listen(8000)

// localhost:8080/create?name=betina&email=betina@gmail.com&senha=betina
// localhost:8080/list
// localhost:8080/list/name/betina
// localhost:8080/update/name/betina?email=sim&senha=123
// localhost:8080/del/name/betina