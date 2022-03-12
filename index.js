import express from 'express'
import cors  from 'cors'

const PORT = 5050
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/', (req, res) => {

    res.json({name: 'Max', age: 34})
})

app.listen(PORT, () => {


    console.log('server started!')
})