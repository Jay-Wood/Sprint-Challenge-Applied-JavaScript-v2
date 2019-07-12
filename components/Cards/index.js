// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
// Create a card for each of the articles and add the card to the DOM.

const cardPromise = axios.get("https://lambda-times-backend.herokuapp.com/articles")

cardPromise
    .then(res => {
    //Success case:
    console.log("cardsData from promise" , res)
    const resArticles = res.data.articles
    console.log("res.data.articles", resArticles)
    for (topic in resArticles) {
        console.log("topic in for in:", topic)
        resArticles[topic].forEach(article => {
            console.log("art", article)
            createCard(article)
        })
    }

    })
    .catch(res => {
    // Handles failure:
    console.log('There was a problem fetching card data. Please try again later', res)
    })

//get element to append new elements to
const cardsContainer = document.querySelector(".cards-container")

function createCard(inputObj) {
    console.log("inputObj at function start:", inputObj)
    //create new elements and add class lists
    const card = document.createElement("div")
    card.classList.add("card")
    const headline = document.createElement("div")
    headline.classList.add("headline")
    const author = document.createElement("div")
    author.classList.add("author")
    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")
    const img = document.createElement("img")
    const byline = document.createElement("span")

    //append chirren
    cardsContainer.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(byline)
    imgContainer.appendChild(img)

    //set textContent
    headline.textContent = inputObj.headline
    console.log("inputObj in function", inputObj)

}

// createCard(cardPromise)
