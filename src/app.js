import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users.router.js'
import ordersRouter from './routes/orders.router.js'
import businessRouter from './routes/business.router.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080

const connection = mongoose.connect('mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase13_EntregaFinal?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRouter)
app.use('/api/business', businessRouter)
app.use('/api/orders', ordersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
//