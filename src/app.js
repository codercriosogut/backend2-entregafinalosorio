import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.router.js';
import ordersRouter from './routes/orders.router.js';
import businessRouter from './routes/business.router.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Error: Configuración de correo no definida en las variables de entorno');
    process.exit(1);
}

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export { transport };

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexión a MongoDB establecida');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Detener el proceso si falla la conexión
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);