const res = require("express/lib/response")

exports.player1 = (req, res, next) => {
    res.render('VsBot');
    next()
}