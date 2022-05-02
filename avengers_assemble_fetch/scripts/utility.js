const cardMaker = (cardInfo) => {
    const {name, image, powers, actor, first_appearance} = cardInfo
    
    const card = document.createElement("section")
    card.classList.add("card")
    
    const nameElement = document.createElement("h1")
    nameElement.innerText = name
    
    const imageElement = document.createElement('img')
    imageElement.src=`images/${image}`
    imageElement.classList.add('hero-image')

    const powersElement = document.createElement("p")
    powersElement.innerText= `Powers: ${powers}`

    const actorElement = document.createElement("p")
    actorElement.innerText = `Played by: ${actor}`
    
    const firstAppearanceElement = document.createElement("p")
    firstAppearanceElement.innerText = `First Appearance: ${first_appearance}`
    
    card.appendChild(nameElement)
    card.appendChild(imageElement)
    card.appendChild(powersElement)
    card.appendChild(actorElement)
    card.appendChild(firstAppearanceElement)

    return card
}