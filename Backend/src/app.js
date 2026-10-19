const experss = require('express')

const app = experss()

app.use(experss.json())

var notes;
app.post('/post', (req, res) => {
  notes = req.body
  res.status(201).json({
    message: "Printed",
    notes: notes
  })
})


app.get('/get', (req, res) => {
  res.send(notes);

})

module.exports = app