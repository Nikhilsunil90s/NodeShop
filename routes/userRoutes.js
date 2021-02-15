const path = require('path');
const router = require('express').Router();

router.get('/shopHome' , (req,res) => {
    //res.send("<h1 style = 'color:grey;text-align:center;'>This is the HomePage!</h1>");
    res.sendFile(path.join(__dirname , "../" , "views" , 'shopView.html'));
});

module.exports = router;
