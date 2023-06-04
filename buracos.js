class ContadorBuracos {
  constructor() {
    // Mapeamento das letras para o número de buracos
    this.buracos = {
      'A': 1,
      'B': 2,
      'C': 0,
      'D': 1,
      'E': 0,
      'F': 0,
      'G': 0,
      'H': 0,
      'I': 0,
      'J': 0,
      'K': 0,
      'L': 0,
      'M': 0,
      'N': 0,
      'O': 1,
      'P': 1,
      'Q': 1,
      'R': 1,
      'S': 0,
      'T': 0,
      'U': 0,
      'V': 0,
      'W': 0,
      'X': 0,
      'Y': 0,
      'Z': 0
    };
  }

  contarBuracos(texto) {
    let totalBuracos = 0;

    // Percorre cada letra do texto e soma a quantidade de buracos
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i].toUpperCase();
      if (this.buracos.hasOwnProperty(letra)) {
        totalBuracos += this.buracos[letra];
      }
    }

    return totalBuracos;
  }
}

module.exports = ContadorBuracos;
