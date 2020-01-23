const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/comments', (req, res) => {
  const { pseudo, comment, rate } = req.body;
  console.log(req.body)
  if (!pseudo, !comment, !rate) {
    res.status(500).send('Some fields are missing');
    console.log('not ok')
  } else {
    // database.query(`SELECT email from user WHERE email='${email}'`, (err, rows) => {
    //   if (err) {
    //     res.sendStatus(400);
    //     throw err;
    //   } else if (rows.length > 0) {
    //     res.status(400).send('email already registred.');
    //   } else {
    //     database.query(`INSERT INTO user(email, password, is_admin) VALUES ('${email}','${sha256(password)}',0)`, (error) => {
    //       if (error) {
    //         res.sendStatus(400);
    //         throw error;
    //       } else {
    //         res.sendStatus(200);
    //       }
    //     });
    //   }
    // });
    res.status(200).send('OK');
    console.log('ok')
  }
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`API listening on ${port}`);
  }
});