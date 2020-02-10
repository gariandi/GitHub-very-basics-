/// esta é a segunda versão do arquivo que soma dois numeros e multiplica por um terceiro


//função//
function operacoes(a,b,c){

    result = a*c;
    resut += b*c;

    return c;
    

};
//fim da função//


//input e chamada//

a = prompt('Entre com o primeiro número: ');
a = parseFloat(a);
b = prompt('Entre com o segundo número: ');
b = parseFloat(b);
c = prompt('Entre com o terceiro número: ');
c = parseFloat(c);

console.log('a soma de ',a,' com ',b,', multiplicada por ',c,' é ',operacoes(a,b,c));
// fim //