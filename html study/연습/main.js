const num = document.getElementById('num');
const res = document.getElementById('result');

function calculate() {
    res.innerHTML = '';
    let n = num.value;

    if (n < 2 || n > 9) {
        res.innerHTML = '<p>구구단은 2단부터 9단이다 이 바보야</p>';
        return;
    }

    for (let i = 1; i <= 9; i++) {
        res.innerHTML += '<p> '+ n + ' * ' + i + ' = ' + n * i + ' </p>';
    }
}