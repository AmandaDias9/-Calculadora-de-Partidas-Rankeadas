function calcularRank() {
    const wins = parseInt(document.getElementById("wins").value);
    const losses = parseInt(document.getElementById("losses").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(wins) || isNaN(losses)) {
      resultado.innerText = "Por favor, insira números válidos.";
      return;
    }
  
    const saldo = wins - losses;
    let rank = "";
  
    if (saldo < 10) {
      rank = "Ferro";
    } else if (saldo < 20) {
      rank = "Bronze";
    } else if (saldo < 30) {
      rank = "Prata";
    } else if (saldo < 40) {
      rank = "Ouro";
    } else if (saldo < 50) {
      rank = "Platina";
    } else if (saldo < 60) {
      rank = "Diamante";
    } else {
      rank = "Lendário";
    }
  
    resultado.innerText = `Saldo: ${saldo}\nRank: ${rank}`;
  }
  