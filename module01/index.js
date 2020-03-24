const express = require('express')

const server = express()
server.use(express.json())

const users = ['DestroyeerU', 'Lonlon']

server.use((req, res, next) => {
  console.time("RequestTime")
  console.log(`Method: ${req.method} URL: ${req.url}`)

  next()

  console.timeEnd("RequestTime")
})

// Middlewares
function assertRequestBody(req, res, next) {
  if (req.body.name) {
    return next()
  }

  return res.status(400).json({ error: 'Field ´index´ not specified'})
}

function assertUserExists(req, res, next) {
  const { index } = req.params
  const user = users[index]

  if (user) {
    req.user = user

    return next()
  }
  
  return res.status(400).json({ error: 'User does not exists'})
}

server.get('/query', (req, res) => {
    const { name } = req.query

    return res.json({ message: `Hello ${name}` })
})

server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index', assertUserExists, (req, res) => {
    return res.json(users[index])
})

server.post('/users', assertRequestBody, (req, res) => {
  const { name } = req.body

  users.push(name)

  return res.json(users)
})

server.put('/users/:index', assertRequestBody, assertUserExists, (req, res) => {
  const { index } = req.params
  const { name } = req.body

  users[index] = name

  return res.json(users)
})

server.delete('/users/:index', assertUserExists, (req, res) => {
  const { index } = req.params

  users.splice(index, 1)

  return res.send()
})

server.listen(3000)

// add nodemom
