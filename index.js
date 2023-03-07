const express = require('express');
const next = require('next');
const path = require('path');
const cookieParser = require('cookie-parser');
const { pool, getUser } = require('./database/maria');
const { verifyToken, generateTokens } = require('./middleware/token');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 80;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static(path.join(__dirname, '/.next/static')));
    server.use(express.json());
    server.use(cookieParser());

    server.get('/api/auth', verifyToken, (req, res) => {
      const { email, age, name, gender, birthday } = req.user;
      return res.status(200).json({ email, age, name, gender, birthday });
    });

    server.post('/api/login', generateTokens, async (req, res) => {
      const { id, email, age, birthday, gender, name } = req.body;

      const user = await getUser(id);

      if (user) {
        const query = `UPDATE users SET refreshToken = ? WHERE id = ?`;
        await pool.execute(query, [req.jwt_refreshToken, id.toString()]);
      } else {
        const query = `INSERT INTO users (id, email, age, birthday, gender, name, refreshToken) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        await pool.execute(query, [id, email, age, birthday, gender, name, req.jwt_refreshToken]);
      }

      return res.send({ success: true });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

// server.get('/', (req, res) => {
//   return app.render(req, res, '/');
// });
// console.log(id, email, age, birthday, gender, name, req.jwt_refreshToken);
