// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const promise = axios.get("https://lambda-times-backend.herokuapp.com/topics")

promise
  .then(res => {
    //Success case:
    const newArray = res.data.topics
    newArray.forEach(t => {
        createTab(t)
    });
  })
  .catch(res => {
    // Handles failure:
    console.log('There was a problem. Please try again later', res)
  })

//select .topics element to anchor new elements to
const topics = document.querySelector(".topics")  

//create new tabs for each topic in promise array
function createTab(inputTopic) {
    //create new elements and add classes 
    const newTab = document.createElement("div")
    newTab.classList.add("tab")

    //append chirren
    topics.appendChild(newTab)

    //set textContent
    newTab.textContent = inputTopic

    return topics
}
