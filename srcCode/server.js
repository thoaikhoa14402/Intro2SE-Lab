const dotenv = require('dotenv')

dotenv.config({path: './config.env'});

const app = require('./app');

// create port
const port = process.env.PORT || 3000;


// create server
const server = app.listen(port, () => {
  console.log(`App running on port ${port}....`);
})

process.on('unhandleRejection', err => {
  console.log('UNHANDLE REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  })
})