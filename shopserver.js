const app = require('express')();
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended' : true}));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(adminRoutes);

app.listen(3000)