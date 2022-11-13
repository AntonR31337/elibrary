import BasicButton from "../../UI components/BasicButton";


const DownloadBtn = ({ authed, book }) => {

    const vision = book.accessInfo.viewability === "NO_PAGES";
    const onDownload = () => window.location.href = `http://books.google.ru/books/download/A_Report_of_the_Industry_Advisory_Commit.epub?id=${book.id}&hl=&output=epub&source=gbs_api`


    return (
        <BasicButton textBtn={"СКАЧАТЬ"} authed={authed} vision={vision} handleDoing={onDownload} />
    )
}





export default DownloadBtn;