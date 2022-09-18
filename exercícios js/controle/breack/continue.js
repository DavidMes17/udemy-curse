const nums = [1,2,3,4,5,6,7,8,9,10];
for (x in nums){
    if (x == 5){break}
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){continue} //continue interrompe a repetição atual e vai pra próxima repetição
    //no exemplo de agora ele irá adicionar todos os índices do array, exceto o índice 5 na qual foi definido no if
        console.log(`${y} = ${nums[y]}`)
};

externo: //este é o bloco escolhido, analise o nome externo aqui e após o break no if (pode ser em linha diferente como na mesma linha)
for(a in nums){ 
    for (b in nums){
        if(a == 2 && b == 3) break externo //como o break funciona no bloco mais próximo ele funcionaria no bloco do b
        //mas se definirmos um "índice" em algum for e colocar o nome após um break, ele irá funcionar neste bloco específico
        console.log(`Par = ${a} ${b}`)
    }
}
//é recomendado outros métodos para um código mais organizado

console.log('Fim!');