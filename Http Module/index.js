const http = require("http");
const util = require("./util");

console.log("util function :: ",util);

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   console.log(url, method);

//   switch (url.slice(1)) {
//     case "apple":
//       res.write("https://www.googleadservices.com/");
//       break;
//     default:
//       res.write(`<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <a href="/apple">Apple.com</a>
//             <a href="/samsung">samsung.com</a>
//             <a href="/xaiomi">xaiomi.com</a>
//         </body>
//         </html>`);
//   }

//   res.end();
// });

// server.listen(5050, () => {
//   console.log("Server is Running on port :: 5050");
// });
