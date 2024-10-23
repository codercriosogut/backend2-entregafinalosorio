const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // El usuario es administrador, continúa
    } else {
        return res.status(403).json({ message: 'Access forbidden: Admins only.' });
    }
};

const isUser = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
        next(); // El usuario es un usuario común, continúa
    } else {
        return res.status(403).json({ message: 'Access forbidden: Users only.' });
    }
};

module.exports = { isAdmin, isUser };
