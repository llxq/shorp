const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index.html');
})
router.get('/home', (req, res) => {
    res.render('index.html');
})
router.get('/product', (req, res) => {
    res.render('product.html');
})
router.get('/furniture', (req, res) => {
    res.render('furniture.html');
})
router.get('/phone', (req, res) => {
    res.render('phone.html');
})
router.get('/contact', (req, res) => {
    res.render('contact.html');
})
router.get('/login', (req, res) => {
    res.render('login.html');
})
router.get('/register', (req, res) => {
    res.render('register.html');
})
module.exports = router;