import { createServer } from 'http';

const server = createServer((reqest, response) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8' });
    const url = new URL(reqest.url, 'http://localhost:8080');

    const body = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Node.js Demo</title>
            </head>
            <body>
                <h1 style="color:green">Hello ${url.searchParams.get('name')}</h1>
            </body>
        </html>`;
    response.end(body)
});

server.listen(8080, () => {
    console.log(
        `Server hört auf http://localhost:${server.address().port}`,
    );
});