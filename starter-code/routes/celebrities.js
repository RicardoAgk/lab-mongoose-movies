const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
  Celebrity.find()
  .then((allCelebrities) => {
    res.render('celebrities/index', { celebrities: allCelebrities });
    })    
    .catch((err) => {
        res.render('error', { err });
    })
});
//list all
router.get('/celebrities/details/:id', (req, res) => {
    let celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
    .then((thisCelebrity) => {
        res.render('celebrities/details', { celebrity: thisCelebrity });
        console.log(celebrity.name)
    })
    .catch((err) => {
        res.render('error', { err });
    })
});
//render create page
router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/create')
})
//submit new to database
router.post('/celebrities/create', (req, res) => {
    let {name, occupation, catchphrase} = req.body;
    Celebrity.create({
        name,
        occupation,
        catchphrase
    }).then(() => {
        res.redirect('/')
    })
});
//delete celebrities
router.post('/celebrities/:id/delete', (req, res) => {
    let id = req.params.id;
    Celebrity.findByIdAndDelete(id)
    .then(() => {
        res.redirect('celebrities/index')
    })
});

module.exports = router;