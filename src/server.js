import express from 'express';
import config from '../config';
import apiRouter from '../api';//import written routers
//import fs from 'fs';

const server = express();


server.set('view engine','ejs');//EJS Settings
server.get('/',(req,res)=>{
    res.render('index');
        /*content:'<h2>mmm</h2>'*/
})

server.use('/api',apiRouter);//Use routers
server.use(express.static('public'));


server.listen(config.port,()=>{
  console.log("listening");
});

/*server.get('/about.html',(req,res)=>{
  fs.readFile('./about.html',(err,data)=>{
    res.send(data.toString('utf-8'));
    if (_err){
      console.log(_err);
    }
  });
});*///read a html file

/*server.get('/', (req, res) => { 
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});*/

server.listen(4242, () => console.log('Server is running...'));