const gameFirst = () => {
    let a = Number(prompt(`Введите номер месяца`));
    if (a === 1 || a === 2 || a === 12) {
        return alert(`Зима`);
    }
    else if (a <= 5 && a >= 3) {
        return alert(`Весна`);
    }
    else if (a <= 8 && a >=6) {
        return alert(`Лето`);
    }
    else if (a <= 11 && a >= 9) { 
        return alert(`Осень`);
    }
    else {
        return alert(`Неверное значение`);
    }
}

const gameSecond = () => {
    let words = [' Яблоко', ' Груша', ' Дыня', ' Виноград', ' Персик', ' Апельсин', ' Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let firstGuess = prompt('Чему равнялся первый элемент массива?');
    let lastGuess = prompt('Чему равнялся последний элемент массива?');

    if (firstGuess === words[0] && lastGuess === words[words.length - 1]) {
        alert('Поздравляем! Вы угадали оба элемента!');
    } else if (firstGuess === words[0] || lastGuess === words[words.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно.');
    }
}