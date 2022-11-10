import './style.scss'


async function getFetch() {

  let url = './api.json'

  const response = await fetch(url)
  const data = await response.json()

  console.log('data: ', data)

  const card = document.querySelector('#card')

  data.map(dados => {
   
    let cardContainer = document.createElement('div')
    cardContainer.classList.add('c-card')

    let letraGrupo = document.createElement('h1')
    letraGrupo.innerText = dados.grupo
    cardContainer.appendChild(letraGrupo)

    let imgCard = document.createElement('img')
    imgCard.src = './assets/caixa.svg'

    let containerGrupos = document.createElement('div')
    containerGrupos.classList.add('c-grupo')
    cardContainer.appendChild(containerGrupos)

   
    

    let ul = document.createElement('ul')
    containerGrupos.appendChild(ul)
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let img3 = document.createElement('img')
    let img4 = document.createElement('img')

    img1.src = dados.img1
    img2.src = dados.img2
    img3.src = dados.img3
    img4.src = dados.img4

    li1.appendChild(img1)
    li2.appendChild(img2)
    li3.appendChild(img3)
    li4.appendChild(img4)

    let paisNome1 = document.createElement('span')
    let paisNome2 = document.createElement('span')
    let paisNome3 = document.createElement('span')
    let paisNome4 = document.createElement('span')

    paisNome1.innerText = dados.time1
    paisNome2.innerText = dados.time2
    paisNome3.innerText = dados.time3
    paisNome4.innerText = dados.time4

    li1.appendChild(paisNome1)
    li2.appendChild(paisNome2)
    li3.appendChild(paisNome3)
    li4.appendChild(paisNome4)




    cardContainer.appendChild(imgCard)

    card.appendChild(cardContainer)

  })
}
getFetch()
