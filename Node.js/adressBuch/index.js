const http = require('http');
let addresses = require('./data');
const getList = require('./list');
const deleteAddress = require('./delete');
const getForm = require('./form');

http
    .createServer((request, response) => {
    const parts = request.url.split('/')
    if (parts.includes('delete')) {
        addresses = deleteAddress(addresses, parts[2]);
        redirect(response, '/');
    } else if (parts.includes('new')) {

    } else if (parts.includes('edit')) {

    } else {
        send(response, getList(addresses))
    }
}).listen(8080, () => {
    console.log('Adressbuch erreichbar unter http://localhost:8080');
});

function redirect(response, to) {
    response.writeHead(302, {location: '/', 'content-type': 'text/plain' });
    response.end('302 Redirection to /');
}