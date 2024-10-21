import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ status: 'error', error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ status: 'error', error: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
};
