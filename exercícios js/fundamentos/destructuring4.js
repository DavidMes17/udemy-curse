function rand([min = 0, max = 1000]){
    if (min > max) [min,max] = [max, min]
    const valor = Math.random() * (max - min) + min //soma com o mínimo para ficar oscilando entre max e min
    return Math.floor(valor)  
};
console.log(rand(50, 40)); //definindo valor dos atributos sem precisar colocar o nome dele (apenas em array)
console.log(rand(992)); //definindo valor do primeiro atributo
console.log(rand([, 10])); //definindo valor do segundo atributo, o primeiro tem o valor padrão definido na função
console.log(rand([])); //ele assumirá os padrões definidos na função, no exemplo min: 0 e máx: 1000
console.log(rand()); //tem que tomar cuidado ao criar função com array por que, no exemplo desta linha, retornarpa um erro por undefined