import express from 'express';
import bodyParser from 'body-parser';
import catRouter from './routes/cats.routes.js';
import userRouter from './routes/users.routes.js';
import errorHandler from './utils/errorHandler.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json())
app.use('/api/users', userRouter);
app.use('/api/cats', catRouter);
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server Started @ ${port}`);
});
