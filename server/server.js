import express from 'express';
import cors from 'cors';
import orderRouter from '../routes/orderRoutes';


const app = express();
const PORT = 5000;
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/order", orderRouter);



app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server running on port: "+ PORT);
    }else console.log("Error occured, sever can't start", error);
});