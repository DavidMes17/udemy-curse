const a = 7; //atribuição, não comparação
let b = 3;
b += a; //não está mudando o valor b para a, está somando o valor de b com o valor de a
console.log(b);

b -= 4; //é o mesmo que b = b - 4
console.log(b);

b *= 2; //mesmo que b = b * 2
console.log(b);
b /= 2; //mesmo que b = b / 2
console.log(b);
b %= 2; //mesmo que b = b % 2
console.log(b);