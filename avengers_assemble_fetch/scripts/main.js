let dataSource = {status: "remote"}
let avengers = []

document.addEventListener("DOMContentLoaded", async function(){
const container = document.querySelectorAll(".container")[0]
const assembleButton = document.querySelector("#assemble")
const clearButton = document.querySelector("#clear")
const switchButton = document.querySelector("#switch")


switchButton.addEventListener("click", handleSwitch)

// button to clear the container of items
clearButton.addEventListener("click",function(){
// is there a better way for us to write this? 
    const newContainer = document.querySelectorAll(".container")[0]
    let children = Array.from(container.children)
    children.forEach(child=>child.remove())
})

assembleButton.addEventListener("click",function(){    
    dataSource.status=="remote"? // for more information about the switching between local and remote, look at the handleSwitch function.
    fetchAssemble():
    fileAssemble()
})


})

// js DOM assemble
function fileAssemble(){
    const container = document.querySelectorAll(".container")[0]
    console.log("These Avengers came from  avengers.js:\n", avengers) // comes from avengers.js as an array
    avengers.forEach(avenger=>{
    let card = cardMaker(avenger)
    container.appendChild(card)
})
}


async function fetchAssemble(){
    const container = document.querySelectorAll(".container")[0]
    let fetchResponse = await fetch("http://localhost:3000/avengers") // returns a Promise with our JSON information

    fetchResponse = await fetchResponse.json()
    fetchResponse.forEach(avenger=>{
        let card = cardMaker(avenger)
        container.appendChild(card)
    })

    return 

    // or use this
    fetch("http://localhost:3000/avengers") // returns a Promise with our JSON information
    .then(r=>r.json()) // r is whatever the return value of the fetch is. the .then says don't run this callback until the fetch has returned something
    .then(fetchResponse => { // .then works the same. fetchResponse is whatever was returned by the .json() callback. 
        fetchResponse.forEach(avenger=>{
            let card = cardMaker(avenger)
            container.appendChild(card)
        })
    })

}

function handleJson(info){
    return info.json()
}


// the functioning switch button lies outside the scope 
// of this lecture, but you can see how it works here, 
// and it relies on information you have learned at this point.
// note that it relies on the declaration of a status property 
// in the dataSource object on line 1. 

function handleSwitch(){
    const switchButton = document.querySelector("#switch")
    if (switchButton.innerText == "Current mode: FETCH. Switch to Local"){
        switchButton.innerText = "Current mode: LOCAL. Switch to Fetch"
        dataSource.status = "local"
        return
    }

    if (switchButton.innerText == "Current mode: LOCAL. Switch to Fetch"){
        switchButton.innerText = "Current mode: FETCH. Switch to Local"
        dataSource.status = "remote"
        return
    }
    

}










































/*


const collectionHandler = () =>{
    avengers.forEach(element=>{
        let card = cardMaker(element)
        container.appendChild(card)
    })
}

const hawkeyeHandler = () => {
    let hawkeye= avengers.filter(avenger=>avenger.name =="Hawkeye")
    let card = cardMaker(hawkeye[0])
    container.appendChild(card)
}

const clearHandler = (e) => {
    const newContainer = document.querySelectorAll(".container")[0]
    let children = Array.from(container.children)
    console.log("children of container", children)
    children.forEach(child=>child.remove())
}

assembleButton.addEventListener("click",collectionHandler)
hawkeyeButton.addEventListener("click",hawkeyeHandler)
thanosButton.addEventListener("click", clearHandler)

*/
