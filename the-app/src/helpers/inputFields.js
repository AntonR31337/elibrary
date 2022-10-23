

export const inputFields = [
    {
        heading: "Информация",
        info: [
            {
                fieldInfo: "Имя и фамилия:",
                placeholder: "Введите имя и фамилию",
                type: "text",
                pattern: "^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$",
            },
            {
                fieldInfo: "Email:",
                placeholder: "Почта sample@sample.sample",
                type: "email",
                pattern: "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}",
            },
            {
                fieldInfo: "Номер телефона:",
                placeholder: "Телефон +XXXXXXXXXXX",
                type: "tel",
                pattern: "^((\+7|7|8)+([0-9]){10})$",
            },
        ]
    },
    {
        heading: "Измененение пароля",
        info: [
            {
                fieldInfo: "Текущий пароль:",
                placeholder: "Введите текущий пароль",
                type: "password",
                pattern: null,
            },
            {
                fieldInfo: "Новый пароль:",
                placeholder: "Введите новый пароль",
                type: "password",
                pattern: null,
            },
            {
                fieldInfo: "Новый пароль:",
                placeholder: "Повторно введите новый пароль",
                type: "password",
                pattern: null,
            },
        ]
    }



]