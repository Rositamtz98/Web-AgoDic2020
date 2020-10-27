const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 8081 ;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, rest)=>{
  rest.send('Bienvendio a mi lista con npm');
})

app.get('/listado', (req, rest)=>{
  const sql = 'select * from demo.alumnos';
  connection.query(sql, function(err,resultado){
    if (err) throw err;
    if (resultado.length > 0) {
      rest.json(resultado);
    } else {
      rest.send('Sin Listado');
    }
  })
})

app.get('/listado/:nombre', (req, rest)=>{
  const {nombre} = req.params;
  const sql = `select email from demo.alumnos where nombre = '${nombre}' `;
  connection.query(sql, function(err,resultado){
    if (err) throw err;
    if (resultado.length > 0) {
      rest.json(resultado);
    } else {
      rest.send('Sin Listado');
    }
  })
})
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'reallyStrongPwd123',
  database: 'demo'
});

connection.connect(function(error) {
    if (error) throw error;
    console.log('Server running!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
