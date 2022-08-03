const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/phone/:phone', (req, res) => {
    // this is wrapped in an `async` function
    // you can use await throughout the function
    let phone = req.params.phone;
    output = {phone};
    if(phone.length == 10)
    output = {phone: '91' + phone};
    else 
    if(phone.length == 12 && phone.substring(0, 2) == '91')
    output = {phone};
    else 
    if(phone.length == 13 && phone.substring(1,3) == '91')
    output = {phone: phone.substring(1,13)};
    else
    output = {phone};
    res.send(output)
})

app.get('/only-phone/:phone', (req, res) => {
  // this is wrapped in an `async` function
  // you can use await throughout the function
  let phone = req.params.phone;
  output = {phone};
  if(phone.length == 10)
  output = {phone: phone};
  else 
  if(phone.length == 12 && phone.substring(0, 2) == '91') //919985044678
  output = {phone: phone.substring(2,13)};
  else 
  if(phone.length == 13 && phone.substring(1,3) == '91') //+919985044678
  output = {phone: phone.substring(3,13)};
  else
  output = {phone};
  res.send(output)
})