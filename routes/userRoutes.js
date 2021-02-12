const router = require('express').Router();

router.get('/' , (req,res) => {
    res.send("<h1 style = 'color:grey;text-align:center;'>This is the HomePage!</h1>");
});

module.exports = router;
