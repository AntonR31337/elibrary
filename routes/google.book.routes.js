const {Router} = require('express')
const router = Router()
const axios = require('axios')
const bookApiKey = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

//     /api/booksearch
router.post('/searchbook', async (req, res) => {
    const { searchName, maxResults, sortParam, startIndex} = req.body
    const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}${sortParam}&startIndex=${startIndex}`)
    .then(function (response) {
        const books = response.data
        res.status(201).json(books);
      })
    .catch(function (error) {
      res.status(401).json({ error: err.message })
    })
})

router.post('/searchgenre', async (req, res) => {
  const { searchName, maxResults, sortParam, startIndex} = req.body
  const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}${sortParam}&startIndex=${startIndex}`)
  .then(function (response) {
      const books = response.data
      res.status(201).json(books);
    })
  .catch(function (error) {
    res.status(401).json({ error: err.message })
  })
})

router.post('/sortbook', async (req, res) => {
  const { searchName, maxResults, sortParam, startIndex} = req.body
  const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}${sortParam}&startIndex=${startIndex}`)
  .then(function (response) {
      const books = response.data
      res.status(201).json(books);
    })
  .catch(function (error) {
    res.status(401).json({ error: err.message })
  })
})

module.exports = router