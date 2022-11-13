import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { postData } from "../../helpers/bookRequest";
import { useEffect, useState } from "react";

const RecommendedBooks = ({ title = "Рекомендуем:", book }) => {    

    const someData = {
        searchName: "book",
        maxResults: 3,
        sortParam: '',
        startIndex: 1
    }

    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(()=>{
        postData('http://localhost:5000/api/booksearch/sortbook', someData)
        .then(data => {
            setRecommendedBooks(data.items);
            console.log(recommendedBooks);
        })
    }, []);

    // getrecommendedBooks.then((data) => {
    //     console.log(getrecommendedBooks);
    //     // setRecBooks([12,11,13])
    //     console.log(recBooks);
    // })

    return (
        <div className="recommended-books">
            <h2>{title}</h2>
            {recommendedBooks.map(el => (<h2 key={el.id}>{el.id}</h2>))}
            {/* {data.items.map(el => console.log(el))} */}
            {/* <BookCard key={uniqid()} book={book} /> */}
        </div>
    );
}

export default RecommendedBooks;