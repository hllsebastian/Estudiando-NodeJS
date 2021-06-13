const {Router} = require('express');
const router = new Router ();

router.get('/mascota', (req, res)=> {
    const data = [{name: "Zeus", edad: 2}, {name: "alis", edad: 3}];
    res.json(data);
})



module.exports = router;