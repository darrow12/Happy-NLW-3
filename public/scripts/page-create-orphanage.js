// Create map
const map = L.map('mapid').setView([-23.453535,-46.5366249], 15);


// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remover icon
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)


})




// Adicionar o campo de fotos

function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images');

    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // Limpar o campo antes de acionar ao container de imagens
    input.value = ""

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Seleção do sim e não
function toggleSelect(event) {

    // Retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    // Colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active');

    // Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value

}

// --------------------------- Desafio para mais tarde --------------------------- \\
function validate(event) {
    // Validar se lat e lng estão preenchidos
    const needsLatAndLng = false; // Agora devo descobrir como vou fazer aquele input.value vazio. Ou nessa linha ou na debaixo ||
    // Ele tá true, e quando a pessoa deixar de selecionar o mapa e aparecer o popup, o de cima vai virar false e ai ele nao entra mais ali
    if (needsLatAndLng) {
        event.preventDefault() // Não envia o formulário
        alert('Selecione um ponto no mapa')
    }

    // Dicas: Como fazer o if | Pegar o campo com document.querySelector | Verificar se no value está vazio (Algo como isso aqui     if(input.value == "") {<quebra de linha> return <quebra de linha>}) | Se value estiver vazio, faça esse event.preventDefault
}
// --------------------------- Desafio para mais tarde --------------------------- \\