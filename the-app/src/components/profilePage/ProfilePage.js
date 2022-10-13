import "./ProfilePage.scss";
import { useState } from 'react';


const ProfilePage = () => {


    const answers = document.querySelector(".answers");

    let form1 = document.querySelector('#form1');
    let form2 = document.querySelector('#form2');
    let form3 = document.querySelector('#form3');
    let form4 = document.querySelector('#form4');
    let form5 = document.querySelector('#form5');
    let form6 = document.querySelector('#form6');
    let form7 = document.querySelector('#form7');



    let question1 = 'Имя';
    let question2 = 'Фамилия';
    let question3 = 'Возраст';
    let question4 = 'Город';
    let question5 = 'Телефон';
    let question6 = 'Почта';
    let question7 = 'Пароль';



    let [searchName1, setSearchName1] = useState("");
    let [searchName2, setSearchName2] = useState("");
    let [searchName3, setSearchName3] = useState("");
    let [searchName4, setSearchName4] = useState("");
    let [searchName5, setSearchName5] = useState("");
    let [searchName6, setSearchName6] = useState("");
    let [searchName7, setSearchName7] = useState("");



    const handleChange1 = (event) => {
        const item = event.target.value;
        setSearchName1(item);
    }
    const handleChange2 = (event) => {
        const item = event.target.value;
        setSearchName2(item);
    }
    const handleChange3 = (event) => {
        const item = event.target.value;
        setSearchName3(item);
    }
    const handleChange4 = (event) => {
        const item = event.target.value;
        setSearchName4(item);
    }
    const handleChange5 = (event) => {
        const item = event.target.value;
        setSearchName5(item);
    }
    const handleChange6 = (event) => {
        const item = event.target.value;
        setSearchName6(item);
    }
    const handleChange7 = (event) => {
        const item = event.target.value;
        setSearchName7(item);
    }

    const handleSubmit1 = (e) => {
        e.preventDefault();
        let p1 = document.createElement('p');
        let b1 = document.createElement('button');
        b1.innerHTML = "<button>Редактировать</button>";
        p1.innerHTML = `${question1} : ${e.target[0].value}`
        p1.className = "answers";
        b1.className = "btn-edit";
        answers.append(p1)
        answers.append(b1)
        form1.classList.replace('open', 'close')
        form2.classList.replace('close', 'open')
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        let p2 = document.createElement('p');
        let b2 = document.createElement('button');
        b2.innerHTML = "<button>Редактировать</button>";
        p2.innerHTML = `${question2} : ${e.target[0].value}`
        p2.className = "answers";
        b2.className = "btn-edit";
        answers.append(p2)
        answers.append(b2)
        form2.classList.replace('open', 'close')
        form3.classList.replace('close', 'open')
    }

    const handleSubmit3 = (e) => {
        e.preventDefault();
        let p3 = document.createElement('p');
        let b3 = document.createElement('button');
        b3.innerHTML = "<button>Редактировать</button>";
        p3.innerHTML = `${question3} : ${e.target[0].value}`
        p3.className = "answers";
        b3.className = "btn-edit";
        answers.append(p3)
        answers.append(b3)
        form3.classList.replace('open', 'close')
        form4.classList.replace('close', 'open')
    }

    const handleSubmit4 = (e) => {
        e.preventDefault();
        let p4 = document.createElement('p');
        let b4 = document.createElement('button');
        b4.innerHTML = "<button>Редактировать</button>";
        p4.innerHTML = `${question4} : ${e.target[0].value}`
        p4.className = "answers";
        b4.className = "btn-edit";
        answers.append(p4)
        answers.append(b4)
        form4.classList.replace('open', 'close')
        form5.classList.replace('close', 'open')
    }

    const handleSubmit5 = (e) => {
        e.preventDefault();
        let p5 = document.createElement('p');
        let b5 = document.createElement('button');
        b5.innerHTML = "<button>Редактировать</button>";
        p5.innerHTML = `${question5} : ${e.target[0].value}`
        p5.className = "answers";
        b5.className = "btn-edit";
        answers.append(p5)
        answers.append(b5)
        form5.classList.replace('open', 'close')
        form6.classList.replace('close', 'open')
    }

    const handleSubmit6 = (e) => {
        e.preventDefault();
        let p6 = document.createElement('p');
        let b6 = document.createElement('button');
        b6.innerHTML = "<button>Редактировать</button>";
        p6.innerHTML = `${question6} : ${e.target[0].value}`
        p6.className = "answers";
        b6.className = "btn-edit";
        answers.append(p6)
        answers.append(b6)
        form6.classList.replace('open', 'close')
        form7.classList.replace('close', 'open')
    }

    const handleSubmit7 = (e) => {
        e.preventDefault();
        let p7 = document.createElement('p');
        let b7 = document.createElement('button');
        b7.innerHTML = "<button>Редактировать</button>";
        p7.innerHTML = `${question7} : ${e.target[0].value}`
        p7.className = "answers";
        b7.className = "btn-edit";
        answers.append(p7)
        answers.append(b7)
        form7.classList.replace('open', 'close')
    }



    return (
        <main className="profile">

            <div className="left-content">

                <div className="profile__title">
                    Личная информация
                </div>

                <form action="#" method="get" id="form1" class="open" onSubmit={handleSubmit1}>
                    <p class="text1" className="form-question">Имя</p>
                    <input type="text" id="one" onChange={handleChange1} value={searchName1} className="input-form" />
                </form>

                <div class="answers"></div>

                <form action="#" method="get" id="form2" class="close" onSubmit={handleSubmit2}>
                    <p class="text2" className="form-question">Фамилия</p>
                    <input type="text" id="two" onChange={handleChange2} value={searchName2} className="input-form" />
                </form>


                <form action="#" method="get" id="form3" class="close" onSubmit={handleSubmit3}>
                    <p class="text3" className="form-question">Возраст</p>
                    <input type="text" id="three" onChange={handleChange3} value={searchName3} className="input-form" />
                </form>

                <form action="#" method="get" id="form4" class="close" onSubmit={handleSubmit4}>
                    <p class="text4" className="form-question">Город</p>
                    <input type="text" id="four" onChange={handleChange4} value={searchName4} className="input-form" />
                </form>

                <form action="#" method="get" id="form5" class="close" onSubmit={handleSubmit5}>
                    <p class="text5" className="form-question">Телефон</p>
                    <input type="text" id="five" onChange={handleChange5} value={searchName5} className="input-form" />
                </form>

                <form action="#" method="get" id="form6" class="close" onSubmit={handleSubmit6}>
                    <p class="text6" className="form-question">Почта</p>
                    <input type="text" id="six" onChange={handleChange6} value={searchName6} className="input-form" />
                </form>

                <form action="#" method="get" id="form7" class="close" onSubmit={handleSubmit7}>
                    <p class="text7" className="form-question">Пароль</p>
                    <input type="text" id="seven" onChange={handleChange7} value={searchName7} className="input-form" />
                </form>

            </div>
        </main>
    )
}



export default ProfilePage;