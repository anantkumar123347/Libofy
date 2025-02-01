const express = require("express");
const router = express.Router();
const { allOrders, addOrder, deleteOrder } = require("../controllers/order.controller");

router.post("/", addOrder);
router.get("/", allOrders);
router.delete("/", deleteOrder);

module.exports = router;
