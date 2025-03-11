function cifraDeCesar(texto, n) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-zA-Z]/)) {
            let base = char === char.toLowerCase() ? 97 : 65;
            let novoChar = String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
            resultado += novoChar;
        } else {
            resultado += char;
        }
    }
    return resultado;
}

function executarCriptografia() {
    let texto = document.getElementById("texto").value;
    let n = parseInt(document.getElementById("n").value);

    if (texto.trim() === "" || isNaN(n) || n < 1 || n > 10) {
        alert("Por favor, insira um texto e um número válido entre 1 e 10.");
        return;
    }

    for (let i = 0; i < 3; i++) {
        texto = cifraDeCesar(texto, n);
    }

    document.getElementById("resultado").innerText = texto;
}
