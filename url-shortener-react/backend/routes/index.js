const router = require('express').Router();
const ShortUrl = require('../models/shortUrl.model')
const middlewareObj = require('../middleware/index');

router.get('/', (req, res) => {
    res.redirect("https://jigsawgroups-short-url.herokuapp.com")
})

router.get('/getData', (req, res) => {
    ShortUrl.find({}, (err, foundShortUrl) => {
        if(err){
            console.log(err)
        } else{
            return res.json(foundShortUrl);
        }
    })
})
  
router.post('/shortUrl/', middlewareObj.checkAlreadyUrl, (req, res) => {
    ShortUrl.create({ full: req.body.full }, (err, createShortUrl) => {
        if(err){
            console.log(err)
        } else {
            console.log(createShortUrl)
            res.json(createShortUrl)
        }
    })
})

router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

module.exports = router;