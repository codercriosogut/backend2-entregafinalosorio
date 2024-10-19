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
const PORT = 8080;

// Verificación de variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Error: Configuración de correo no definida en las variables de entorno');
    process.exit(1);
}

// Configuración del transportador de Nodemailer
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Exporta el transportador para usar en otros archivos
export { transport };

// Conexión a MongoDB
mongoose.connect('mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase13_EntregaFinal?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
