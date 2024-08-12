
import express from 'express'
import cors from 'cors'
import parseRouter from './route/parserRoute.js';

const app = express();

app.use(cors({optionSuccessStatus: 200}));  
app.use(express.json())

app.use('/api', parseRouter)

app.listen(8000, () => {
  console.log('app runing on http://localhost:8000')
})
