// 1.que elementos del DOM voy a capturar? el div y la foto que hay en bienvenidos, el div de recomendados donde meteremos cada tarjeta con cada imagen, y el apartado de destinos /select

const limpiar = document.querySelector('#limpiar')
const fotoHeader = document.querySelector('#foto img')
const recomendados = document.querySelector('#recomendados')
const destinos = document.querySelector('#destinos')
const fotoBot = document.querySelector("section:last-of-type")
const fotoCiudad = document.querySelector('#fotoCiudad')

//el fragment/carretilla!!
const fragment = document.createDocumentFragment()

//2.que es lo que vamos a pintar mas tarde en las funciones
const url = "assets"

const arrayCartas = [
    {
        src: `${url}/img-pequenias/viajes-1.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '1',
        titulo: 'Viaje 1',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    },
    {
        src: `${url}/img-pequenias/viajes-2.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '2',
        titulo: 'Viaje 2',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    },
    {
        src: `${url}/img-pequenias/viajes-3.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '3',
        titulo: 'Viaje 3',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    },
    {
        src: `${url}/img-pequenias/viajes-4.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '4',
        titulo: 'Viaje 4',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    },
    {
        src: `${url}/img-pequenias/viajes-5.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '5',
        titulo: 'Viaje 5',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    },
    {
        src: `${url}/img-pequenias/viajes-6.jpg`,
        alt: 'señora en hamaca con fondo de playa',
        title: 'titulo atributo',
        id: '6',
        titulo: 'Viaje 6',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae, ratione itaque repellendus omnis inventore voluptatum alias laborum quibusdam quia?'
    }
]
const arrayFotoGrandes = [
    {
        titulo: '1',
        src: `${url}/img-grandes/1.jpg`,
        alt: 'Paisaje 1',
        ciudad: "Madrid"
    },
    {
        titulo: '2',
        src: `${url}/img-grandes/2.jpg`,
        alt: 'Paisaje 2',
        ciudad: "Lisboa"
    },
    {
        titulo: '3',
        src: `${url}/img-grandes/3.jpg`,
        alt: 'Paisaje 3',
        ciudad: "Estambul"
    },
    {
        titulo: '4',
        src: `${url}/img-grandes/4.jpg`,
        alt: 'Paisaje 4',
        ciudad: "Bangkok"
    },
    {
        titulo: '5',
        src: `${url}/img-grandes/5.jpg`,
        alt: 'Paisaje 5',
        ciudad: "Tokyo"
    },
    {
        titulo: '6',
        src: `${url}/img-grandes/6.jpg`,
        alt: 'Paisaje 6',
        ciudad: "Roma"
    },
    {
        titulo: '7',
        src: `${url}/img-grandes/7.jpg`,
        alt: 'Paisaje 7',
        ciudad: "Amsterdam"
    },
    {
        titulo: '8',
        src: `${url}/img-grandes/8.jpg`,
        alt: 'Paisaje 8',
        ciudad: "Praga"
    }
]

const arrayCiudades = ['Madrid', 'Lisboa', 'Estambul', 'Bangkok', 'Tokyo', 'Roma', 'Amsterdam', 'Praga']


//4.Cuando sucederan estas cosas?? cuando se cargue la pagina y cuando se escoja una opcion del select

destinos.addEventListener('change', (ev) => {
    const tag = ev.target.value
    //console.log(tag)
    borrar()
    
    pintarFotoBot(tag)
    botonVisible()
})
limpiar.addEventListener('click', (ev) => {
    borrar()
    
})

//3.que acciones necesito que sucedan??que cada vez que se cargue la pagina la foto de arriba cambia aleatoria, necesito crear las tarjetas con a partir del array de objetos, que cuando elijamos una ciudad del select aparezca una imagen con su titulo(puede ser el mismo array que para el de arriba)

const aleatoria = () => {

    return parseInt(Math.floor(Math.random() * arrayFotoGrandes.length))

}


const pintarFotoTop = () => {
    const indice = aleatoria()
    console.log(indice)
    fotoHeader.src = arrayFotoGrandes[indice].src;

}

const pintarCartas = () => {
    arrayCartas.forEach((item) => {
        const cajaGrande = document.createElement("DIV")
        const foto = document.createElement("IMG")
        const caja = document.createElement("DIV")
        const tituloCarta = document.createElement("H2")
        const parrafo = document.createElement("P")
        cajaGrande.classList.add("card")
        foto.src = item.src
        foto.alt = item.alt
        foto.title = item.title
        foto.id = item.id
        foto.classList.add("card-img-top")
        caja.classList.add("card-body")
        tituloCarta.textContent = item.title
        tituloCarta.classList.add("card-title")
        parrafo.textContent = item.texto
        parrafo.classList.add("card-text")
        caja.append(tituloCarta)
        caja.append(parrafo)
        cajaGrande.append(foto)
        cajaGrande.append(caja)
        fragment.append(cajaGrande)
    })
    recomendados.append(fragment)
}

const pintarSelect = () => {
    arrayCiudades.forEach((item) => {
        const option1 = document.createElement("OPTION")
        option1.value = item
        option1.textContent = item
        fragment.append(option1)
    })
    destinos.append(fragment)
}

const pintarFotoBot = (tag) => {
    

    const match = arrayFotoGrandes.find((item)=>{
        return item.ciudad === tag
    })

    const {alt, src, titulo: title, ciudad} = match

        const cajaGrande = document.createElement("DIV")
        const caja = document.createElement("DIV")
        const foto = document.createElement("IMG")
        foto.src = src
        foto.alt = alt
        const titulo = document.createElement("P")
        titulo.id = ciudad
        titulo.textContent = title
        caja.append(foto)
        cajaGrande.append(caja, titulo)
        fragment.append(cajaGrande)
    
        fotoCiudad.append(fragment) 
}

const borrar = () => {
    fotoCiudad.innerHTML = '';
}

const botonVisible = () => {
    limpiar.style.visibility='visible'  
}



pintarFotoTop()
pintarCartas()
pintarSelect()