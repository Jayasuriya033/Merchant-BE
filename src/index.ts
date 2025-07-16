import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import login from './routes/login.routes';
import shopDetails from './routes/shopDetails.routes';
import uploadLogo from './routes/shopLogo.routes';
import ownerDetails from './routes/owner.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;


app.use(cors());
app.use(express.json());


//Routes
app.use('/api/auth', login)
app.use('/api/auth', shopDetails)
app.use('/api/auth', uploadLogo)
app.use('/api/auth', ownerDetails)




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});