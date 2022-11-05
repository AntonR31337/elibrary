const {Router} = require('express')
const router = Router()
const axios = require('axios')
const bookApiKey = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

//     /api/booksearch
router.post('/', async (req, res) => {
    console.log('req.body',req);
    const { searchName, maxResults, startIndex} = req.body
    // const searchName = 'dogs'
    // const maxResults = 27
    // const startIndex = 0
    const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
    .then(function (response) {
        console.log('2222222222222222222222222',response.data.items);
        const books = response.data
        console.log('response',response.data);
        console.log('1111111111111111111111111111',books);
        res.status(201).json(books);
      })
      .catch(function (error) {
        // res.status(401).json({ error: err.message })
        console.log('errors', error);
      })
})










module.exports = router