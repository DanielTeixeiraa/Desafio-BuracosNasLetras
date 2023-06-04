const ContadorBuracos = require('./buracos');


test('Contagem de buracos em "DANIEL" deve retornar 2', () => {
  const contador = new ContadorBuracos();
  const texto = 'DANIEL';
  expect(contador.contarBuracos(texto)).toBe(2);
});

test('Contagem de buracos em "IFF" deve retornar 0', () => {
  const contador = new ContadorBuracos();
  const texto = 'IFF';
  expect(contador.contarBuracos(texto)).toBe(0);
});

test('Contagem de buracos em "TOPICOS AVANCADOS 2" deve retornar 8', () => {
  const contador = new ContadorBuracos();
  const texto = 'TOPICOS AVANCADOS 2';
  expect(contador.contarBuracos(texto)).toBe(8);
});

  
  test('Contagem de buracos com input número deve retornar 0', () => {
    const contador = new ContadorBuracos();
    const texto = 123;
    expect(contador.contarBuracos(texto)).toBe(0);
  });
  
  test('Contagem de buracos com input objeto deve retornar 0', () => {
    const contador = new ContadorBuracos();
    const texto = { mensagem: 'Olá' };
    expect(contador.contarBuracos(texto)).toBe(0);
  });
    
  test('Contagem de buracos em "!@#$%" (caracteres especiais) deve retornar 0', () => {
    const contador = new ContadorBuracos();
    const texto = '!@#$%';
    expect(contador.contarBuracos(texto)).toBe(0);
  });
  
  test('Contagem de buracos em "A B C" (espaços entre letras) deve retornar 2', () => {
    const contador = new ContadorBuracos();
    const texto = 'A B C';
    expect(contador.contarBuracos(texto)).toBe(3);
  });
  
  test('Contagem de buracos em "aBcD" (combinação de letras maiúsculas e minúsculas) deve retornar 4', () => {
    const contador = new ContadorBuracos();
    const texto = 'aBcD';
    expect(contador.contarBuracos(texto)).toBe(4);
  });
  