import { doc, getDoc, setDoc } from "firebase/firestore";
import { docRef } from "../firebase/firebase";


export const getInfo = async (docRef) => {
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
        console.log(currentList)
        return currentList
    } catch (error) {
        console.log(error)
    }
}