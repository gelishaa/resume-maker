const mongoose = require('mongoose')

const URL = 'mongodb+srv://anhelinamarkus:53ib29VuKabs74E@cluster0.0pw9l.mongodb.net/resume-maker'

mongoose.connect(URL)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('База даних підключена')
})

connection.on('error', (error) => {
    console.log(error)
})
