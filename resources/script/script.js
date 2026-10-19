let arquivos = ["foto1.png","foto2.jpg","foto_viagem.png","relatorio.pdf","relatorio_2026.pdf","trabalho.docx","foto_casa.jpg","musica.mp3","foto_carro.png",    "atividade.pdf","video.mp4","documento.txt"];

// pega os pdf
let pdf = arquivos.filter(a => a.endsWith(".pdf"));
console.log("PDF:", pdf);

// pega os arquivos foto
let fotos = arquivos.filter(a => a.startsWith("foto"));
console.log("Fotos:", fotos);

// verifica se tem o arquivo
console.log(arquivos.includes("musica.mp3"));