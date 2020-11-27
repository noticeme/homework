let login = 'admin';
let Password = 'admin';

let message1 = prompt("Введите логин");
let message2 = prompt("Введите пароль");


if(message1 == login && message2 == Password){
    alert('Вы успешно авторизировались');
} 
else {
    alert('Логин или пароль не верные');
}

// if (login == true) alert('ДА'); 
