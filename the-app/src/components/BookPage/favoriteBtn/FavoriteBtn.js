
import BasicButton from "../../UI components/BasicButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";


const FavoriteBtn = ({ book, authed }) => {
    const userId = async () => await auth.currentUser.uid;
    const docRef = doc(db, "users", `${userId}`);
    const [isFavorite, setIsFavorite] = useState(false)
    const [data, setData] = useState([])

    const { id } = book;
    const { title } = book.volumeInfo;
    const thumbnail = book.volumeInfo.imageLinks.thumbnail

    const currentBook = {
        id,
        title,
        thumbnail
    }

    useEffect(() => {
        const getInfo = async () => {
            try {
                const userData = await getDoc(docRef)
                const favorites = userData._document.data.value.mapValue.fields.favoritesList.arrayValue.values
                const currentList = favorites.map(item => {
                    const { id, title, thumbnail } = item.mapValue.fields;
                    const number = id.stringValue;
                    const name = title.stringValue;
                    const img = thumbnail.stringValue;
                    return { id: number, title: name, thumbnail: img }
                })
                setData(currentList)
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [])

    useEffect(() => {
        if (data.length) {
            const isInTheList = data.findIndex(item => item.id === currentBook.id) === -1;
            !isInTheList ? setIsFavorite(true) : setIsFavorite(false)
        }
    }, [data])

    const addToFavorites = async () => {
        console.log(userId, isFavorite, data)
        try {
            const newFavorites = !isFavorite
                ? [...data, currentBook]
                : data.filter(item => item.id !== currentBook.id)
            await setDoc(docRef, { favoritesList: newFavorites }, { merge: true });
            const newUserData = await getDoc(docRef)
            console.dir(newUserData._document.data.value.mapValue.fields.favoritesList.arrayValue.values);
            setIsFavorite(!isFavorite)
        } catch (error) {
            console.log(error);
            //await setDoc(docRef, { favoritesList: [currentBook] }, { merge: true });
        }
    }
    return (
        <BasicButton textBtn={"В ИЗБРАННОЕ"} authed={authed} handleDoing={addToFavorites} >
            {!isFavorite
                ? <FavoriteIcon sx={{
                    marginRight: "10px",
                    color: "white"
                }} />
                : <FavoriteIcon sx={{
                    marginRight: "10px",
                    color: "red"
                }} />}
        </BasicButton>
    )
}

export default FavoriteBtn;