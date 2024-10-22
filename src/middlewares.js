import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ status: 'error', error: 'No token provided' });
    }

    // Verifica si el token contiene el prefijo "Bearer "
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length); // Elimina "Bearer " del token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            const message = err.name === 'TokenExpiredError' ? 'Token has expired' : 'Invalid token';
            return res.status(403).send({ status: 'error', error: message });
        }
        req.user = decoded;
        next();
    });

};
