const { Router } = require ('express');
const router = new Router();

router.get('/user',(req,res )=>{
    res.send('msg: get_msg')
});
router.post('/user',(req,res )=>{
    res.json({
        msg : 'post_GET'
    });
});
router.put('/user',(req,res )=>{
    res.send('Put')
});
router.delete('/user',(req,res )=>{
    res.json({
        msg:'delete'
    });
});




module.exports = router