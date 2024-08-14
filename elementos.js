let frutas = ["maçã", "banana", "laranja"];

frutas.push("manga");
console.log("Após push:", frutas);

frutas.pop();
console.log("Após pop:", frutas);

frutas.shift();
console.log("Após shift:", frutas);

frutas.unshift("abacaxi");
console.log("Após unshift:", frutas);

frutas.forEach((fruta) => {
    console.log("Fruta:", fruta);
});