const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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

    const today = new Date();

    Date.prototype.getWeek = function() {
      var onejan = new Date(this.getFullYear(),0,1);
      var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
      var dayOfYear = ((today - onejan + 86400000)/86400000);
      return Math.ceil(dayOfYear/7)
    };

    function formatDate(date, format) {
      const map = {
          mm: String(date.getMonth() + 1).padStart(2, '0'),
          dd: String(date.getDate()).padStart(2, '0'),
          //yy: date.getFullYear().toString().slice(-2),
          yyyy: date.getFullYear()
      }
  
      return format.replace(/mm|dd|yyyy/gi, matched => map[matched])
    }

    let date = formatDate(today, 'dd-mm-yyyy');

    var week = today.getWeek();

    week = String(week).padStart(2, '0'); // '09'
    let month = formatDate(today, 'mm')

    month = String(month).padStart(2, '0');

    let suffix = "FS" + formatDate(today, 'yyyy') + month + week

    res.send({...output, date, suffix})
})

app.get('/only-phone/:phone', (req, res) => {
  // this is wrapped in an `async` function
  // you can use await throughout the function.
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

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;
