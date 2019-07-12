// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container")

function Header() {
    
    //create new elements to mirror HTML mock up, assign classes
    const header = document.createElement("div")
    header.classList.add("header")
    const date = document.createElement("span")
    // header.classList.add("h1")
    const h1 = document.createElement("h1")
    const temp = document.createElement("span")
    
    //append chirren
    headerContainer.appendChild(header)
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)

    //set textContent for each element
    date.textContent = "SMARCH 28, 2019"
    h1.textContent = "Lambda Times"
    temp.textContent = "98°"

    return header    
}

Header();