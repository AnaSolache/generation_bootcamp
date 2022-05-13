//importar
const { palindrome } = require('../para_probar');


//primer test unitario
test('palindrome de generation',() => {
    const resultado = palindrome('generation');
    //comparar
    expect(resultado).toBe('noitareneg'); //recibimos el resultado del metodo
});


test('palindrome usando string vacio',() => {
    const resultado = palindrome('');
    //comparar
    expect(resultado).toBe(''); //recibimos el resultado del metodo
});


test('palindrome usando undefined',() => {
    const resultado = palindrome('');
    //comparar
    expect(resultado).toBe(''); //recibimos el resultado del metodo
});