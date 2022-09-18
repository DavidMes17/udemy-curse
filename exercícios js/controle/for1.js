let contador = 1;
while (contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
};

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
};

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++){ //o 'i' irá ser separado para cada dado do array com o .length, não irá passar com a condição i < notas.length para navegar no array
    //declarar como let para não deixá-lo como uma variável global
    console.log(`nota = ${notas[i]}`)
};