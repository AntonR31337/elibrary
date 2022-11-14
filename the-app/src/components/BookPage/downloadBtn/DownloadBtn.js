import BasicButton from "../../UI components/BasicButton";


const DownloadBtn = ({ authed, book }) => {

    const vision = book.accessInfo.viewability === "NO_PAGES";
    const onDownload = () => window.location.href = `https://books.google.ru/books?id=${book.id}&output=epub&source=gbs_api`


    return (
        <BasicButton textBtn={"СКАЧАТЬ"} authed={authed} vision={vision} handleDoing={onDownload} />
    )
}





export default DownloadBtn;