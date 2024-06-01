const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'TOKEN_SECRET');
        const userId = decodedToken.userId;

        req.auth = { userId };

        /* === Verification of user's ID to access tickets === */
        /* if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }; */
        next();
    } catch {
        console.info('here');
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};