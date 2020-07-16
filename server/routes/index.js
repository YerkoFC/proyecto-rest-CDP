/* ROUTER */
const { Router } =  require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send('GET REQUEST FROM INDEX ROUTE');
});

module.exports = router;