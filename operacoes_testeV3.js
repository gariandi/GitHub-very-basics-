/// esta é a segunda versão do arquivo que soma dois numeros e multiplica por um terceiro


//função//
function operacoes(a,b,c){

    let result = a*c;
    result += b*c;

    return result;
    

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