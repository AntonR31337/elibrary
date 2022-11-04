const {Router} = require('express')
const firebaseAuth = require('../firebase/firebase');
const router = Router()
const {check, validationResult} = require('express-validator')


//   /api/auth
router.post(
    '/signup', 
    [
        check('login', 'Некорректный email').isEmail(),
        check('pass', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ], 
        async (req, res) => {
    const { login, pass } = req.body;
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        console.log('errors', errors);
        return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректные данные при регистрации'
        })
      }
      const user = await firebaseAuth.addUser(login, pass);
      res.status(201).json(user);
    } catch (err) {
        console.log(err);
      res.status(401).json({ error: err.message });
    }
  });

router.post(
    '/login',
    [
        check('login', 'Введите корректный email').normalizeEmail().isEmail(),
        check('pass', 'Неверный пароль').exists()
    ],
     async (req, res) => {
    const { login, pass } = req.body;
    try {
        const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректные данные при входе в систему'
        })
      }
      const user = await firebaseAuth.authenticate(login, pass);
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  });

router.post('/logout', async (req, res) => {
    
    try {
      const user = await firebaseAuth.logout();
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  })

  


module.exports = router