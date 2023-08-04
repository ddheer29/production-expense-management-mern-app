const express = require('express');
const { addTransection,
    getAllTransection,
    editTransection,
    deleteTransection } = require('../controllers/transectionController');

// router object
const router = express.Router();

// routers
// add transection POST method
router.post('/add-transection', addTransection);

// edit transection POST method
router.post('/edit-transection', editTransection);

// delete transection POST method
router.post('/delete-transection', deleteTransection);


// get transection GET method
router.post('/get-transection', getAllTransection);



module.exports = router