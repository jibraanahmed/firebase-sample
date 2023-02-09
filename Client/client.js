const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require("path")
const session = require('express-session');
var cookieParser = require('cookie-parser')
const port = 1005

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));


app.get('/index', (req, res) => {
    res.sendFile('D:\\Projects\\NodeJS\\Firebase_Sample\\Client\\client.html');
})

app.post('/firebase/registration', (req, res) => {
    console.log(req.body)

})

app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;