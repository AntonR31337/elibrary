const {Router} = require('express')
const router = Router()
const axios = require('axios')
const bookApiKey = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

//     /api/booksearch
router.post('/', async (req, res) => {
    console.log('req.body',req);
    const { searchName, maxResults, startIndex} = req.body
    const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
    .then(function (response) {
        const books = response.data
        res.status(201).json(books);
      })
      .catch(function (error) {
        console.log('errors', error);
      })
})

router.post('/searchgenre', async (req, res) => {
  console.log('req.body',req);
  const { searchName, maxResults, startIndex} = req.body
  const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
  .then(function (response) {
      const books = response.data
      res.status(201).json(books);
    })
    .catch(function (error) {
      // res.status(401).json({ error: err.message })
      console.log('errors', error);
    })
})








module.exports = router