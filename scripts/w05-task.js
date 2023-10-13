/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");

        const h = document.createElement("h3");
        h.textContent = temple.templeName;

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(h);
        article.appendChild(img);
        templesElement.appendChild(article);

    })
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    const templeData = await response.json();
    templeList.length = 0; // Clear the templeList.
    templeList.push(...templeData);
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "utah": 
                // For the "utah" case, filter for temples where the location contains "Utah" as a string.
                displayTemples(temples.filter(temple => temple.location.includes("Utah")));
                break;
        case "notutah": 
                // For the "nonutah" case, filter for temples where the location does not contain "Utah" as a string.
                displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
                break;
        case "older": 
                // For the "older" case, filter for temples where the dedicated date is before 1950.
                displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
                break;
        case "all": 
                // For the "all" case, no filter is needed. Just use the original 'temples' as the argument.
                displayTemples(temples);
                break;

    }
};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

