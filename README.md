## Server
### Description
Simple CRUD JSON file.

### Clone
`git clone https://github.com/hatatori/nodejs-crud`

### Start server
Type `node index.js` on terminal to start server.

Use these links in the browser.

## Crud

### Create data on json
`localhost:8000/create?name=betina&email=betina@gmail.com&senha=betina`

### Return all results from json
`localhost:8000/list`

### Return individual result from json
`localhost:8000/list/name/betina`

### Update information from json
`localhost:8000/update/name/betina?email=sim&senha=123`

### Delete information from json
`localhost:8000/del/name/betina`
