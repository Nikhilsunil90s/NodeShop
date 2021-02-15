const path = require('path');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended' : true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , "public")));

app.use("/admin",adminRoutes);
app.use(userRoutes);

app.use((req,res)=>{
    res.status(401).send("<h1>Page Not Found!</h1>")
});


app.listen(3000)