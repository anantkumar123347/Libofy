const express = require('express');
const Order = require('../models/order.model');
const allOrders = async (req, res) => {
    try {
        const allOrders = await Order.find({}).populate("items");
        return res.status(200).json({ allOrders });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const addOrder = async (req, res) => {
    try {
        const { email, items, totalAmount, deliveryAddress } = req.body;

        if (!email || !items || !totalAmount || !deliveryAddress) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newOrder = await Order.create({ email, items, totalAmount, deliveryAddress });
        console.log("New Order Created:", newOrder);

        return res.status(201).json({ newOrder });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Failed to create order" });
    }
};
const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.body; 
    
        if (!orderId) {
          return res.status(400).json({ message: 'orderId is required' });
        }
    
        const order = await Order.findById(orderId);
        if (!order) {
          return res.status(404).json({ message: 'Order not found' });
        }
    
        await Order.findByIdAndDelete(orderId);
        return res.status(200).json({ message: 'Order deleted successfully' });
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Failed to delete order' });
      }
};

module.exports = { allOrders, addOrder, deleteOrder };
