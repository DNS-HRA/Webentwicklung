export function getList(addresses) {
    return `<DOCTYPE html>
    <html lang="de">
        <head>
            <title>Adressbuch</title>
        </head>
        <body>
            <h1>Adressbuch</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                        <th>loeschen</th>
                    </tr>
                </thead>
                <tbody>
                    ${addresses.map(createRow).join('')}
                </tbody>
            </table>    
        </body>
    </html>`;
}
function createRow(address) {
    return `<tr>
        <td>${address.id}</td>
        <td>${address.firstname}</td>
        <td>${address.lastname}</td>
        <td><a href="/delete/${address.id}">loeschen</a></td>
    </tr>`
}