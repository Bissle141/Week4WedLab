const button = document.querySelector('button')
const resBox = document.querySelector('#resBox')

const baseURL = 'https://swapi.dev/api/'

const buttonClick = () => {
    // console.log('button clicked!')
    axios.get(`${baseURL}planets/?search=Alderaan`)
        .then (res => {
            // console.log(res)
            let residentsList = res.data.results[0].residents
            // console.log(residentsList)
            
            residentsList.forEach ( el => {
                axios.get(el)
                .then( res => {
                    let resName = res.data.name
                    let newHeader = document.createElement("h2")
                    newHeader.textContent = resName
                    resBox.appendChild(newHeader)
                })
            })
        })
    
}

button.addEventListener('click', buttonClick)