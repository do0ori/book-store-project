const express = require('express');
const router = express.Router();
const {
    submitOrder,
    getOrderList,
    getOrderDetails
} = require('../controllers/orderController');

router.post('/', submitOrder);
router.get('/', getOrderList);
router.get('/:orderId', getOrderDetails);

module.exports = router;