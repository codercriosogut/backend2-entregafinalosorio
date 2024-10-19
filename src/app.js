// app.js
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.router.js';
import ordersRouter from './routes/orders.router.js';
import businessRouter from './routes/business.router.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer'; // Cambiado a import
import dotenv from 'dotenv'; // Importando dotenv

dotenv.config(); // Inicializa dotenv

const app = express();
const PORT = 8080;

// Configuración del transportador de Nodemailer
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

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

// Ruta para enviar el correo de la orden
app.get('/mail/order', async (req, res) => {
    try {
        const result = await transport.sendMail({
            from: "Cristian Osorio <cosoriogut@gmail.com>",
            to: "cosoriogut@gmail.com",
            subject: "Detalles de la Orden",
            html: `
            <div>
                <h1>Detalles de la Orden</h1>
                <p>Gracias por tu pedido!</p>
                <!-- Aquí puedes incluir más detalles de la orden -->
            </div>
            `,
            attachments: [] // Aquí puedes agregar archivos si lo necesitas
        });

        console.log('Correo enviado: ', result.messageId);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo: ', error);
        res.status(500).send('Error al enviar el correo');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
