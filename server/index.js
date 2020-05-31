let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller')
require('dotenv').config();

const {PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {app.set('db', db); console.log("db connected");
 })
.catch(err => console.log(err)
)

app.get('/api/inventory', ctrl.getAll);
app.post(`/api/inventory`, ctrl.create);
app.put('/api/inventory/:id', ctrl.update);



app.listen(PORT, () => console.log(`Port is: ${PORT}`));