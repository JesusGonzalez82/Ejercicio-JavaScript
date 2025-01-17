let i = 1;
let resultado = document.getElementById('resultado');
let num = '';

while (i<=10){
    console.log(i);
    num = num + i + ", ";
    i++; 
}
resultado.innerHTML = (num);