//função//
function operacoes(a,b,c){

    return (a+b)*c;
    

};
//fim da função//


//input e chamada//

let a = prompt('Entre com o primeiro número: ');
a = parseFloat(a);
let b = prompt('Entre com o segundo número: ');
b = parseFloat(b);
let c = prompt('Entre com o terceiro número: ');
c = parseFloat(c);

console.log('a soma de ',a,' com ',b,', multiplicada por ',c,' é ',operacoes(a,b,c));
// fim //