const N=document.getElementById('num');

const res=document.getElementById('result');


function calculate(){
    res.innerHTML = '';
    let n = num.value;

    if (n%1!=0){
        res.innerHTML = "<p>구구단은 정수를 입력해야지!</p>";
    }
    else if (n<2 || n>9){
        res.innerHTML = "<p>구구단은 2단부터 9단까지다!</p>";
    }
    else{
        for (let i=1; i<10; i++) {
            res.innerHTML += '<p>' + n + ' * ' + i + ' = ' + n * i + '</p>';
        }
    }
}


