import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('no errorrrr so far');
});

// /signin --> POST = success/fail

// /register --> POST = newUser{}

//  /profile/:userId --> GET = userInfo

//  /image --> PUT = updated detail


app.listen(3000, () => {
  console.log('app is running on port 3000');
})