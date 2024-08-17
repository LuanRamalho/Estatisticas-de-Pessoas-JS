function calcularEstatisticas() {
    const totalPessoas = parseInt(document.getElementById('totalPessoas').value);
    const futebol = parseInt(document.getElementById('futebol').value);
    const basquete = parseInt(document.getElementById('basquete').value);
    const volei = parseInt(document.getElementById('volei').value);
    const handball = parseInt(document.getElementById('handball').value);

    if (isNaN(totalPessoas) || isNaN(futebol) || isNaN(basquete) || isNaN(volei) || isNaN(handball)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    const porcentagemFutebol = (futebol / totalPessoas) * 100;
    const porcentagemBasquete = (basquete / totalPessoas) * 100;
    const porcentagemVolei = (volei / totalPessoas) * 100;
    const porcentagemHandball = (handball / totalPessoas) * 100;

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Resultados</h2>
        <p>Total de pessoas pesquisadas: ${totalPessoas}</p>
        <p>Pessoas que curtem Futebol: ${futebol} (${porcentagemFutebol.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemFutebol}%;"></div>
        </div>
        <p>Pessoas que curtem Basquete: ${basquete} (${porcentagemBasquete.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemBasquete}%;"></div>
        </div>
        <p>Pessoas que curtem Vôlei: ${volei} (${porcentagemVolei.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemVolei}%;"></div>
        </div>
        <p>Pessoas que curtem Handball: ${handball} (${porcentagemHandball.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemHandball}%;"></div>
        </div>
    `;
}
