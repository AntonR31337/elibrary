
import { useEffect, useState } from "react";
import { onAuthStateChanged, updateEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import SubmitButtons from '../../UI components/SubmitButtons';
import { phoneValidation } from "../../../helpers/vars";


const ChangePhoneForm = ({ setError }) => {

    const [value, setValue] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isChanging, setIsChanging] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setPhoneNumber(user.phoneNumber);
        });
    }, []);

    const handleSubmitPhone = async (event) => {
        if (value.match(phoneValidation)) {
            setPhoneNumber(value);
        } else {
            setError("Введите валидный номер телефона")
        }
        setIsChanging(false);
        setValue("");
    }

    return (
        <>
            <form className="profile__form " onSubmit={handleSubmitPhone}>
                <div className="profile__form-content profile__form-content--input">
                    <div className="profile__container">
                        <div className="profile__left">
                            <p className="profile__info">Номер телефона:</p>
                            {!isChanging
                                ? <p className="profile__info">{phoneNumber ? phoneNumber : "Нет данных"}</p>
                                : <input className="profile__input"
                                    placeholder="Телефон +XXXXXXXXXXX"
                                    type="tel"
                                    pattern={phoneValidation}
                                    onChange={handleChange}
                                    value={value} />
                            }
                        </div>
                        <SubmitButtons
                            isChanging={isChanging}
                            setIsChanging={setIsChanging}
                            onSubmit={handleSubmitPhone} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ChangePhoneForm;