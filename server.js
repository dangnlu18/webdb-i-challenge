const express = require('express');

const accountsRouter = require('./routers/accounts')

const server = express();

server.use(express.json());

server.get('/', (req,res)=>{
    res.send('welcome')
})

server.use('/api/accounts', accountsRouter)

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})



module.exports = server;