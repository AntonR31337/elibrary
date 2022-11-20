import BasicButton from "../../UI components/BasicButton";


const DownloadBtn = ({ authed, book }) => {

    const vision = book.accessInfo.publicDomain === "true";
    const onDownload = () => window.location.href = `${book.accessInfo.epub.downloadLink}`


    return (
        <BasicButton textBtn={"СКАЧАТЬ"} authed={authed} vision={vision} handleDoing={onDownload} />
    )
}





export default DownloadBtn;