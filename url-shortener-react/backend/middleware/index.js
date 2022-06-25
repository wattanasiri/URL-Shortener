const middlewareObj = {};
const ShortUrl = require('../models/shortUrl.model');

middlewareObj.checkAlreadyUrl = async (req, res, next) => {
    const fullUrl = req.body.full
    const shortUrl = await ShortUrl.findOne({ full: fullUrl })
    console.log(shortUrl)
    if(shortUrl !== null){
        ShortUrl.findOne({ full: req.body.full }, (err, foundShortUrl) => {
            if(err){
                console.log(err);
            } else {
                res.json(foundShortUrl);
            }
        })
    } else {
        next();
    }
}

module.exports = middlewareObj;