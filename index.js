const express = require('express');
const next = require('next');
const path = require('path');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static(path.join(__dirname, '/.next/static')));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.get('/', (req, res) => {
      return app.render(req, res, '/');
    });

    server.listen(80, err => {
      if (err) throw err;
      console.log('> Ready on 80 port');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
