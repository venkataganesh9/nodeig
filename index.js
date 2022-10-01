
const http = require("http");
const fs = require("fs");
var port = process.argv.slice(2)
port = parseInt(String(port).slice(7))
console.log(port);
let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, h) => {
    if (err) {
        throw err;
    }
    homeContent = h;
});

fs.readFile("project.html", (err, p) => {
    if (err) {
        throw err;
    }
    projectContent = p;
});
fs.readFile("registration.html", (err, r) => {
    if (err) {
        throw err;
    }
    registrationContent = r;
});
http
    .createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });
        switch (url) {
            case "/project":
                response.write(projectContent);
                response.end();
                break;
            case "/registration":
                response.write(registrationContent);
                response.end();
                break;
            default:
                response.write(homeContent);
                response.end();
                break;
        }
    })
    .listen(port);
