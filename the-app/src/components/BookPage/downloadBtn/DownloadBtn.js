import BasicButton from "../../UI components/BasicButton";
import { useNavigate } from "react-router-dom";


const DownloadBtn = ({ authed, book }) => {
  
const navigate = useNavigate();

const vision = book.accessInfo.viewability === "NO_PAGES";
const onDownload = () => navigate(`/download/${book.id}/epub`)


return (
    <BasicButton textBtn={"СЧАЧАТЬ"} authed={authed} vision={vision} handleDoing={onDownload}  />
  )
}





export default DownloadBtn;