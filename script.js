document.querySelector('.base').addEventListener('submit', (event) => {
    event.preventDefault();
    let valor = document.querySelector('#valor').value;

    document.querySelector('.base').style.display = 'none';
    document.querySelector('.pix-gerado').style.display = 'block';
    document.querySelector('.pix-gerado span').innerHTML = `R$ ${valor}`;

});

document.querySelector('#gerar-novamente').addEventListener('click', () => {
    gerarNovamente();
});

function gerarNovamente() {
    document.querySelector('.base').style.display = 'block';
    document.querySelector('.pix-gerado').style.display = 'none';
}
