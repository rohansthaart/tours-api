const express = require('express');
const router = express.Router();

const {getAllQuery,
        createQuery,
        deleteQuery
} = require('../controllers/query')


router.route('/').post(createQuery).get(getAllQuery)
router.route('/delete/:id').delete(deleteQuery)
module.exports = router;