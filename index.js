import express from 'express'

const PORT = 5000
const app = express()

app.get('/', (req, res) => {

    res.json({name: 'Max', age: 34})
})

app.listen(PORT, () => {


    console.log('server started!')
})