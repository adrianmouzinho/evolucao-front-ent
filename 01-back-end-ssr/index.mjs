import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: ['http://localhost:5174', 'http://localhost:3000'],
}))

app.set('view engine', 'ejs')

// API RESTFULL

// 1. Múltiplos clientes (web, mobile, API pública, integração)
// 2. Misturar responsabilidades

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Adrian Mouzinho de Brito' },
    { id: 2, name: 'Ruan Henrique' },
    { id: 3, name: 'Albert Tose' },
  ]

  if(req.header('Accept') === 'application/json') {
    return res.json({ data: users })
  }

  return res.render('users/list', { users })
})

app.listen(3333)