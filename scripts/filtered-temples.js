// select the DOM elements for output

const year = document.querySelector("#currentyear");


// use the date object
const today = new Date();



year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span class="highlight">${oLastModif}</span>`;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Arequipa Perú",
        location: "Arequipa, Perú",
        dedicated: "2019, November, 30",
        area: 26969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7276-thumb.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary Alberta Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg"
    },
    {
        templeName: "Brasília Brazil",
        location: "Brasília Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro Brazil",
        dedicated: "2022, Mayo, 8",
        area: 29966,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    }

];


function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${ temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${ temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${ temple.area } sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`)
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });

}
createTempleCard();  