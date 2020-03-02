import createError from 'http-errors';
import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import logger from 'morgan';

// Importing routes
import userRouter from './routes/userRoutes';
import dueRouter from './routes/dueRoutes';
import paymentRouter from './routes/paymentRoutes';

// persist admin
// import createAdmin from './adminSeed';

// Initialize the Express App
const app: Application = express();

// seed admin
// createAdmin();

// logs HTTP requests
app.use(logger('dev'));

app.disable('x-powered-by');
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root Route
app.get('/', (_req, res) => {
  res.status(200).json({ info: 'Welcome to UduPay App' });
});

// ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/dues', dueRouter);
app.use('/api/v1/payment', paymentRouter);

// catch 404 and forward to error handler
app.use(function(
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction,
) {
  next(createError(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
