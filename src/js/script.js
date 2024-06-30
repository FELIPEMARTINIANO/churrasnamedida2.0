function calcular() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = document.getElementById('carne-bovina').checked;
    const frango = document.getElementById('frango').checked;
    const linguica = document.getElementById('linguica').checked;
    const refrigerante = document.getElementById('refrigerante').checked;
    const cerveja = document.getElementById('cerveja').checked;
    const paoAlho = document.getElementById('pao-alho').checked;

    let totalcarnebovina = 0;
    let totalfrango = 0;
    let totallinguica = 0;
    let totalrefrigerante = 0;
    let totalcerveja = 0;
    let totalpaoAlho = 0;

    if (carneBovina) {
        totalcarnebovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    }
    if (frango) {
        totalfrango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    }
    if (linguica) {
        totallinguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    }
    if (refrigerante) {
        totalrefrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    }
    if (cerveja) {
        totalcerveja = (homens * 0.8) + (mulheres * 0.5);
    }
    if (paoAlho) {
        totalpaoAlho = (homens * 0.1) + (mulheres * 0.1) + (criancas * 0.1);
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Quantidade necessária:</strong></p>
        ${carneBovina ? `<p>- ${totalcarnebovina.toFixed(1).replace('.',',')} Kg de Carne Bovina</p>` : ''}
        ${frango ? `<p>- ${totalfrango.toFixed(1).replace('.',',')} Kg de Frango</p>` : ''}
        ${linguica ? `<p>- ${totallinguica.toFixed(1).replace('.',',')} Kg de Linguiça</p>` : ''}
        ${refrigerante ? `<p>- ${totalrefrigerante.toFixed(1).replace('.',',')} litros de Refrigerante</p>` : ''}
        ${cerveja ? `<p>- ${totalcerveja.toFixed(1).replace('.',',')} litros de cerveja</p>` : ''}
        ${paoAlho ? `<p>- ${totalpaoAlho.toFixed(1).replace('.',',')} Kg de Pão de Alho</p>` : ''}
    `;
}