const express = require('express');
const router = express.Router();
let isLogin = "登录";
router.get('/', (req, res) => {
    res.render('index.html', {
        loginInfo: isLogin
    });
})
router.get('/home', (req, res) => {
    res.render('index.html', {
        loginInfo: isLogin
    });
})
router.get('/product', (req, res) => {
    res.render('product.html', {
        loginInfo: isLogin
    });
})
router.get('/furniture', (req, res) => {
    res.render('furniture.html', {
        loginInfo: isLogin
    });
})
router.get('/phone', (req, res) => {
    res.render('phone.html', {
        loginInfo: isLogin
    });
})
router.get('/contact', (req, res) => {
    res.render('contact.html', {
        loginInfo: isLogin
    });
})
router.get('/login', (req, res) => {
    res.render('login.html', {
        loginInfo: isLogin
    });
})
router.get('/register', (req, res) => {
    res.render('register.html', {
        loginInfo: isLogin
    });
})
router.get('/single', (req, res) => {
    res.render('single.html', {
        loginInfo: isLogin
    });
})
router.get('/shorpcar', (req, res) => {
    res.render('shorpcar.html', {
        loginInfo: isLogin
    });
})

// 404页面
router.get('/none', (req, res) => {
    res.render('404.html', {
        loginInfo: isLogin
    });
})
router.use((req, res) => {
    res.render('404.html')
})
module.exports = router;