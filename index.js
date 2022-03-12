import express from 'express'

const PORT = 5050
const app = express()

app.get('/api/', (req, res) => {

    res.json({name: 'Max', age: 34})
})

app.listen(PORT, () => {


    console.log('server started!')
})