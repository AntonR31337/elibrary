import DeleteIcon from '@mui/icons-material/Delete';
import Popup from "reactjs-popup";
import { deleteUser } from "firebase/auth";
import { auth } from "../../firebase/firebase"

export const DeleteProfile = () => {
    const contentStyle = {
        maxWidth: "600px",
        width: "90%"
      };
      
    const deleteProfile = () => {
        deleteUser(auth.currentUser).then(() => {
            console.log('User deleted');
          }).catch((error) => {
            console.log('An error ocurred', error);
          });
    }
   
    return (
        <div>
            <h3 className="profile-title main-title">Удаление профиля</h3>
                <Popup
                    trigger={
                        <p className="profile-remove" >
                        <span className="profile-remove-icon"><DeleteIcon /></span>
                            Удалить профиль
                        </p>
                    }
                    modal
                    contentStyle={contentStyle}
                >
                    {close => (
                        <div className="profile-modal">
                            <span className="profile-modal__close" onClick={close}>&times;</span>
                            <div className="profile-modal__header"> Подтверждение удаления профиля </div>
                            <div className="profile-modal__content">
                                <p className="profile-modal__content-main">Вы действительно хотите удалить Ваш профиль?</p>
                                <p className="profile-modal__content-sub">После удаления Вы не сможете восстановить сохраненые данные аккаунта </p>
                            </div>
                            <div className="profile-modal__actions">
                                <button className="profile-modal__button" onClick={deleteProfile}> Удалить </button>
                                <button
                                    className="profile-modal__button"
                                    onClick={() => {
                                    console.log("modal closed ");
                                    close();
                                    }}
                                >
                                Отмена
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
        </div>
    );
};






