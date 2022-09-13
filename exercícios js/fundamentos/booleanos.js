let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
/*
 * para que seja possível printar o valor true, coloca 2 negação para que o JS
 * não printa o valor contrário. por exemplo se colocar "!true" o valor a retornar
 * vai ser "false", mas se colocar "!!true" ele retornará o valor "true".
 * por isso, para converter um number em boolean, se coloca 2 negação para que não
 * seja printado um valor "mentiroso" do boolean
 */