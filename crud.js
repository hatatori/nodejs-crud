const fs = require('fs')

var filename = 'data.json'
var data_json = JSON.parse(fs.readFileSync('./'+filename,'utf-8'))

save = function(obj){
    fs.writeFileSync(filename, JSON.stringify(obj,null,2))
}

queryStringToObj = function(str){
    obj = {}
    str.split("&").map(e=> obj[e.split('=')[0]] = e.split('=')[1] )
    return obj
}

create = function(obj){
    data_json = JSON.parse(fs.readFileSync('./'+filename,'utf-8'))
    data_json.push(obj)
    save(data_json)
    console.log("Saved")
    return true
}

del = function(name){
    path = name.split("/")
    o = data_json.filter(e=>e[path[0]] != path[1] )
    save(o)
    console.log("Deleted")
    return true
}

update = function(name, obj){
    path = name.split("/")
    objeto = data_json.find(e=>e[path[0]] == path[1])
    Object.keys(obj).map(e=>objeto[e] = obj[e])
    save(data_json)
    console.log("Updated")
    return true
}

module.exports = {create, del, update, data_json, filename, queryStringToObj}
    
// function read(name){
//     path = name.split("/")
//     return data_json.find(e=>e[path[0]] == path[1])
// }




// // localhost:8080/create?name=betina&email=betina@gmail.com&senha=betina
// // localhost:8080/list
// // localhost:8080/list/name/betina
// // localhost:8080/update/name/betina?email=sim&senha=123
// // localhost:8080/del/name/betina

