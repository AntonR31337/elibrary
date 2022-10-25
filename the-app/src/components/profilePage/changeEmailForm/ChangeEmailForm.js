
import { useEffect, useState } from "react";
import { onAuthStateChanged, updateEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import SubmitButtons from '../../UI components/SubmitButtons';
import { reauthenticate } from '../../../firebase/firebaseAuth'


const ChangeEmailForm = ({ setError }) => {

    const [value, setValue] = useState("");
    const [email, setEmail] = useState('');

    const [isChanging, setIsChanging] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setEmail(user.email);
        });
    }, []);
    

    const handleSubmitEmail = async (event) => {
        event.preventDefault();
        let password = prompt('Введите ваш пароль');
        if (value.trim()) {
            reauthenticate(password).then((data) => {
                updateEmail(data.user, value).then(() => {
                    console.log('Email updated!');
                    setEmail(value);
                    setIsChanging(false);
                    })
            }).catch((error) => {
                console.log('An error ocurred', error);
                setError("Вы неверно ввели пароль");
              });
        }
    }

    return (
        <>
            <form className="profile__form " onSubmit={handleSubmitEmail}>
                <div className="profile__form-content profile__form-content--input">
                    <div className="profile__container">
                        <div className="profile__left">
                            <p className="profile__info">Email:</p>
                            {!isChanging
                                ? <p className="profile__info">{email}</p>
                                : <input className="profile__input"
                                    placeholder="Почта sample@sample.sample"
                                    type="email"
                                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                                    onChange={handleChange}
                                   />
                            }
                        </div>
                        <SubmitButtons
                            isChanging={isChanging}
                            setIsChanging={setIsChanging}
                            onSubmit={handleSubmitEmail} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ChangeEmailForm;