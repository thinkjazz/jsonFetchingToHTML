var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == 'https://jsonplaceholder.typicode.com/posts') {
    // искусственная задержка для наглядности
    console.log('JSON получен');
    setTimeout(function () {
      file.serve(req, res);
    }, 2000);
  } else {
    file.serve(req, res);
  }

}


// ------ запустить сервер -------

if (!module.parent) {
  console.log('Сервер запущен! http://localhost:8080');
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;


}