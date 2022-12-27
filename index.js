const express = require('express')

const app = express()

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const cors = require('cors')

app.use(
    cors({
      origin: '*',
      methods: 'GET,PUT,PATCH,POST,DELETE',
    })
  );

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const morgan = require('morgan');
    app.use(morgan('dev'));

app.get('/', (request, response) => {
        response.status(200).json({
          success: true,
          message: 'server working fine',
        });
      });

      const JobRoutes = require('./routes/JobRoutes');
      app.use('/api/v1', JobRoutes);
      const server = app.listen(process.env.PORT, () => {
        console.log('server is working on port ' + process.env.PORT);
      });     
