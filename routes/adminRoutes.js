const path = require('path');

const router = require('express').Router();

router.get('/' , (req,res,next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname , "../" , "views" , "adminView.html"));
})

router.get('/addProduct' , (req,res,next) => {
    //res.send("<form method = 'POST' action = '/admin/addProduct'><input type = 'text' name = 'bodyInput'/><br><input type = 'submit' value = 'Add Product!'/></form>")
    res.sendFile(path.join(__dirname, "../" , "views" , "fillform.html"));
});

router.post('/addProduct' , (req,res,next)=>{
    //res.send("<h1>Product Added Succesfully!</h1> , " + req.body.bodyInput);
    res.redirect('/shopHome');
});

module.exports = router;