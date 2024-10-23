const passport = require('passport');
const productsRouter = require('../routes/products.router');
const cartRouter = require('../routes/cart.router');

app.use('/api/products', passport.authenticate('jwt', { session: false }), productsRouter);
app.use('/api/cart', passport.authenticate('jwt', { session: false }), cartRouter);