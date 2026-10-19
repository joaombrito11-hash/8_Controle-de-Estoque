
let produtos = ["Mouse", "Fone", "PC", "Teclado", "Cabo", "Monitor", "Notebook", "Tablet", "Webcam", "Mousepad"];

produtos.push("Celular");


if (produtos.includes("Mouse")) {
    console.log("Tem mouse");
} else {
    console.log("Não tem");
}


let filtro = produtos.filter(p =>
    p.length > 5);


console.log(produtos);
console.log(filtro);