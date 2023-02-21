const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require("./app/config/sequelize.config")
const boot = require('./app/boot/boot')

app.use(express.static(__dirname + '/app'));
app.use('/public',express.static('public'))

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.get('/', function(req, res, next) {
    res.json({message: 'alive'});
});

db.sequelize.sync(
    // {force:true}
).then(async _ => {
    await boot.initialize(db)
    boot.routes(app)
}).catch(e => {
    console.log(e)
});

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});
