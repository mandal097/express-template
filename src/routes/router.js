const router = require('express').Router();

router.use('/test' ,(req,res)=>{
    res.status(200).json({
        status:1,
        message:'test routes',
        data:"no data yet"
    })
})

module.exports = router;