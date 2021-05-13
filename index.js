const Parser = require('rss-parser');
const http = require("http");
const path = require("path");
const fs = require("fs");
const feed = require('./public/feed')

let parser = new Parser(); // can rename customFields here

const server = http.createServer((req, res) => {
    if (req.url === '/') {

      (async () => {
        // let feed = await parser.parseURL('https://www.reddit.com/.rss');
        let feed = await parser.parseURL('https://www.theguardian.com/international/rss');
        console.log(feed.title);

        let html = '<table> <thead> <tr> <th>title</th><th>link</th> </tr> </thead> ';
        // Each item has : title. link, pubDate, author, content <table>, contentSnippet, id, isoDate
        feed.items.forEach(item => {
          html += `<tr> <td>${item.title}</td>`
          html += `<td> <a target="_blank" href="${item.link}">${item.link}</a> </td>`
          html += `</tr>`
        });
        html += '</table>';

        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        // res.write(JSON.stringify(feed));
        res.end(html);
      })();
      


        // fs.readFile(
        //     path.join(__dirname, 'public', 'feed.js'),
        //     (err, content) => {
        //         if (err) throw err;
        //         res.writeHead(200, { 'Content-Type': 'text/javascript' }); // Write to the HTTP Headers
    
        //         // // add rss to elm
        //         // p = document.getElementById('rss-feed');
        //         // p.innerHTML = 'changed!';
        //         res.end(content);
        //     }
        //   );


      // fs.readFile(
      //   path.join(__dirname, 'public', 'index.html'),
      //   (err, content) => {
      //       if (err) throw err;
      //       res.writeHead(200, { 'Content-Type': 'text/html' }); // Write to the HTTP Headers

      //       // // add rss to elm
      //       // p = document.getElementById('rss-feed');
      //       // p.innerHTML = 'changed!';
      //       res.end(content);
      //   }
      // );


    }
  
    // if (req.url === '/api/users') {
    //   const users = [
    //     { name: 'Bob Smith', age: 40 },
    //     { name: 'John Doe', age: 30 }
    //   ];
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify(users));
    // }
  
    // // Build file path
    // let filePath = path.join(
    //   __dirname,
    //   "public",
    //   req.url === "/" ? "index.html" : req.url
    // );
  
    // // Extension of file
    // let extname = path.extname(filePath);
  
    // // Initial content type
    // let contentType = "text/html";
  
    // // Check ext and set content type
    // switch (extname) {
    //   case ".js":
    //     contentType = "text/javascript";
    //     break;
    //   case ".css":
    //     contentType = "text/css";
    //     break;
    //   case ".json":
    //     contentType = "application/json";
    //     break;
    //   case ".png":
    //     contentType = "image/png";
    //     break;
    //   case ".jpg":
    //     contentType = "image/jpg";
    //     break;
    // }
  
    // // Check if contentType is text/html but no .html file extension
    // if (contentType == "text/html" && extname == "") filePath += ".html";
  
    // // log the filePath
    // console.log(filePath);
  
    // // Read File
    // fs.readFile(filePath, (err, content) => {
    //   if (err) {
    //     if (err.code == "ENOENT") {
    //       // Page not found
    //       fs.readFile(
    //         path.join(__dirname, "public", "404.html"),
    //         (err, content) => {
    //           res.writeHead(404, { "Content-Type": "text/html" });
    //           res.end(content, "utf8");
    //         }
    //       );
    //     } else {
    //       //  Some server error
    //       res.writeHead(500);
    //       res.end(`Server Error: ${err.code}`);
    //     }
    //   } else {
    //     // Success
    //     res.writeHead(200, { "Content-Type": contentType });
    //     res.end(content, "utf8");
    //   }
    // });


  }); // createServer
  
  // Use process port or custom one
  const PORT = process.env.PORT || 5000;
  
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// (async () => {

// //   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   let feed = await parser.parseURL('https://www.theguardian.com/international/rss');
//   console.log(feed.title);

//   // Each item has : title. link, pubDate, author, content <table>, contentSnippet, id, isoDate
//   feed.items.forEach(item => {
//     // console.log(item)
//     console.log(item.title + ':' + item.link)
//   });

//   console.log(feed.length);

// })();