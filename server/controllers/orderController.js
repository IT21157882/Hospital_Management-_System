import mongoose from "../db/conn.js"
import orderSchema from '../models/Order';
const orderModel = mongoose.model('Order', orderSchema);

export function addNewOrder(req, res) {

    const { name, age, phone, message, Image } = req.body;
    let newOrder = new orderModel();

    newOrder.name = name;
    newOrder.age = age;
    newOrder.phone = phone;
    newOrder.message = message;
    newOrder.Image = Image;

    newOrder.save().then((response) => {
        res.send(response);
    });

   

}
