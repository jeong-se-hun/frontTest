const jwt = require('jsonwebtoken');
const { getUser } = require('.././database/maria');

require('dotenv').config();

const verifyToken = async (req, res, next) => {
  const jwt_accessToken = req.cookies.jwt_accessToken || '';

  if (!jwt_accessToken) {
    return res.status(401).json({ message: 'Unauthorized: No jwt_accessToken provided' });
  }

  try {
    const decoded = jwt.verify(jwt_accessToken, process.env.JWT_SECRET_KEY);
    req.user = await getUser(decoded.email);

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      const refreshToken = req.cookies.jwt_refreshToken || '';

      if (!refreshToken) return res.status(401).json({ message: 'Unauthorized: Refresh token not provided' });

      try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
        const user = await getUser(decoded.email);

        if (!user || user.refreshToken !== refreshToken) {
          return res.status(401).json({ message: 'Unauthorized: Invalid refresh token' });
        }

        const newToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, {
          expiresIn: '10s',
        });

        res.cookie('jwt_accessToken', newToken, {
          maxAge: 3600000 * 4,
          path: '/',
          httpOnly: true,
        });

        req.user = user;

        next();
      } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid refresh token' });
      }
    } else {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  }
};

const generateTokens = (req, res, next) => {
  const { email } = req.body;

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '10s',
  });

  const refreshToken = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET_KEY, {
    expiresIn: '30s',
  });

  res.cookie('jwt_accessToken', accessToken, {
    maxAge: 3600000 * 4, // 토큰 제한시간 (3600000 은 1시간)
    path: '/',
    httpOnly: true,
  });
  res.cookie('jwt_refreshToken', refreshToken, {
    expiresIn: 7 * 24 * 60 * 60 * 1000, // 1주일
    path: '/',
    httpOnly: true,
  });

  req.jwt_refreshToken = refreshToken;
  next();
};

module.exports = {
  verifyToken,
  generateTokens,
};
