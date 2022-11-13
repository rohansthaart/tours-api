const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware')
const {getAllTours,
        getTour,
        createTour,
        // updateTour,
        // deleteTour,

} = require('../controllers/tours')

// router.route('/').post(createTour).get(getAllTours)
// router.route('/:id').get(getTour).delete(deleteTour).patch(updateTour)


router.route('/').post(createTour).get(getAllTours)
router.route('/:id').get(getTour)


module.exports = router;