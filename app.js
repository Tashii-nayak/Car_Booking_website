const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express= require('express');
const app=express();
const connectToDb = require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const cookieParser=require('cookie-parser');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.post('/users/register', (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname?.firstname || !fullname?.lastname || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const fullNameString = `${fullname.firstname} ${fullname.lastname}`;
  console.log("Registering user:", fullNameString, email);

  res.status(200).json({ message: 'User registered successfully!' });
});


app.use('/users',userRoutes);
app.use('/captains',captainRoutes);


module.exports=app;