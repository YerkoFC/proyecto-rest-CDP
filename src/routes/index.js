/* ROUTER */
const { Router } =  require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send(`
    <h1>API REST - COMPUTACIÓN PARALELA Y DISTRIBUIDA</h1>
    `);
});

module.exports = router;