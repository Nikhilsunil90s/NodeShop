const router = require('express').Router();

router.get('/addProduct' , (req,res,next) => {
    res.send("<form method = 'POST' action = '/addProduct'><input type = 'text' name = 'bodyInput'/><br><input type = 'submit' value = 'Add Product!'/></form>")
});

router.post('/addProduct' , (req,res,next)=>{
    res.send("<h1>Product Added Succesfully!</h1> , " + req.body.bodyInput);
});

module.exports = router;