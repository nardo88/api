import express from 'express'
import cors  from 'cors'

const PORT = 5050
const app = express()

// делаем доступным JSON
app.use(express.json())
// отключаем cors политики
app.use(cors())
// дефолтный эндпоинт
app.get('/api/', (req, res) => {
    res.json({name: 'Max', age: 34})
})

app.listen(PORT, () => {
    console.log('server started!')
})

