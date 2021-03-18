//  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d849f74ae0d8e55dd10666a12adfd084 

function getUrl(town){
    let url1 = 'http://api.openweathermap.org/data/2.5/weather?q='
    
    let url2 = '&APPID=d849f74ae0d8e55dd10666a12adfd084'
    
    return url1+town+url2
}
let anapa = document.querySelector('#anapa')
let male = document.querySelector('#male')
let paris = document.querySelector('#paris')

let display = document.querySelector('.right')

paris.addEventListener('click', () => {
    let url = getUrl('Paris')
    getData(url)
})

male.addEventListener('click', () => {
    let url = getUrl('Male')
    getData(url)
})

anapa.addEventListener('click', () => {
    let url = getUrl('Anapa')
    getData(url)
})

kiev.addEventListener('click', () => {
    let url = getUrl('Kiev')
    getData(url)
})
bangkok.addEventListener('click', () => {
    let url = getUrl('Bangkok')
    getData(url)
})
cairo.addEventListener('click', () => {
    let url = getUrl('Cairo')
    getData(url)
})
urengoy.addEventListener('click', () => {
    let url = getUrl('Urengoy')
    getData(url)
})
washington.addEventListener('click', () => {
    let url = getUrl('Washington')
    getData(url)
})
singapore.addEventListener('click', () => {
    let url = getUrl('Singapore')
    getData(url)
})


async function getData(url){

    let promise = await fetch(url)
    if (promise.ok) {

        let json = await promise.json()

        console.log(json)
        console.log(json.name)
        let photoTown = '';

        if (json.name == 'Anapa'){
            photoTown ='<img height="300px" src="https://i.ytimg.com/vi/aD-fFyGvDW8/maxresdefault.jpg">'
        }
        else if (json.name == 'Kiev'){
            photoTown ='<img height="300px src="https://memepedia.ru/wp-content/uploads/2021/02/evzq-nqxyaa4ruy-1.jpg">'
        }

        let photo = '';
        if (json.weather[0].main == 'Clouds') {
            photo = '<img height="100px" src = "https://st.depositphotos.com/1000641/1387/i/600/depositphotos_13876018-stock-photo-cloud-and-blue-sky.jpg">';
        } else if (json.weather[0].main == 'Mist'){
            photo = '<img height="100px" src = "https://www.pnp.ru/upload/entities/2017/09/28/article/detailPicture/b8/0d/30/99/ae0d3c454db8ccf0f971e803e1c57b2b.jpg">';
        }
        


        let temp = parseFloat(json.main.temp) - 273.15

        display.innerHTML = `
        <div>${photoTown}</div>
        <div>${photo}</div>
        <div> Скорость ветра: ${json.wind.speed} м/с </div>
        <div> Температура: ${temp.toFixed(2)} C </div>
        `
    }
}


