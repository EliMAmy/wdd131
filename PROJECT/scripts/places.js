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


//WINDCHILL
function calculateWindChill() {

    let temperature = parseFloat(document.getElementById('currentTemperature').innerHTML)
    let speed = parseFloat(document.getElementById('wind').innerHTML)
    let factor = windChill(temperature, speed)

    if (temperature <= 50 && speed > 3) {
        document.getElementById("currentWindChill").innerHTML = factor + " ºF"
    } else {
        document.getElementById("currentWindChill").innerHTML = "N/A"
    }

}

function windChill(t, s) {
    let f = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16)
    return Math.round(f)
}

calculateWindChill();

const places = [
    {
        placeName: "Plaza de Armas Arequipa",
        area: 1393.5,
        description: "The Plaza de Armas in Arequipa is one of the fairest in all of Peru. Local people come to socialize and read newspapers under the shade of palm trees, children throw seeds on the ground for birds, and travelers from all over the world come to gape at the towering Basilica Cathedral and make wishes at Tuturutu Fountain in the center of the square.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-plaza.jpg&w=828&q=75"
    },
    {
        placeName: "Museo Santuarios Andinos",
        area: 990.8,
        description: "The Museum of Andean Sanctuaries is home to Juanita, the Inca Ice Maiden, one of the most famous historical residents in Arequipa. Juanita is believed to have been a sacrificial offering by Inca priests to the volcano Mount Ampato, where she remained buried in snow for over 500 years. Learn about the story of Juanita and see artifacts associated with the discovery of other mummies in the Arequipa region on a museum tour.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-museum.jpg&w=828&q=75"
    },
    {
        placeName: "Casa del Moral",
        area: 96630,
        description: "History and architecture buffs can quickly lose track of time at Casa Del Moral. This well-preserved 18th-century mansion is one of the oldest existing buildings from the city’s Baroque architecture period. This former private residence is named after the old mulberry tree (arbol de moras) in its courtyard. Visitors pay a small entrance fee and can explore the site independently or with a guide.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-casa-de-moral.jpg&w=828&q=75"
    },
    {
        placeName: "Mirador Yanahuara",
        area: 1123,
        description: "You can see the historic center of Arequipa from above with a visit to this famous lookout point in the Yanahuara district. Elegant stone arches are carved with the prose and poetry of Arequipa’s many notable writers and also provide perfect frames for photos of El Misti. It is a local tradition among young lovers to go to Mirador de Yanahuara to pledge eternal love and affection with the Lord of Arequipa (Misti) as a witness.",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        placeName: "Museum of Contemporary Art",
        area: 15655,
        description: "For a refreshing interlude between visits to historical and archeological sites, visit Museo de Arte Contemporáneo de Arequipa (MACA). It is one of the few modern art museums in all of Peru with a collection that includes canvas paintings, sculptures, watercolors, and cartoons, as well as photographs by the Arequipa-born brothers Carlos and Miguel Vargas. Once you’ve gotten your art fix, relax in the garden, or have a drink and snacks in a cafe in a repurposed train car.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-maca.jpg&w=828&q=75"
    },
    {
        placeName: "Mundo Alpaca",
        area: 9600,
        description: "Everywhere you go in Peru, you’ll see alpaca scarves, sweaters, and gloves for sale. In Arequipa, go to Mundo Alpaca where you can learn about the origins of these products, from the shearing of alpacas and vicunas, to spinning yarn, to weaving using centuries-old methods. At the end, you can tell the difference between our alpaca products and those made with synthetic material.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-alpaca.jpg&w=828&q=75"
    },
    {
        placeName: "Monasterio de Santa Catalina",
        area: 1166,
        description: "You can see the historic center of Arequipa from above with a visit to this famous lookout point in the Yanahuara district. Elegant stone arches are carved with the prose and poetry of Arequipa’s many notable writers and also provide perfect frames for photos of El Misti. It is a local tradition among young lovers to go to Mirador de Yanahuara to pledge eternal love and affection with the Lord of Arequipa (Misti) as a witness.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-monastery.jpg&w=828&q=75"
    },
    {
        placeName: "Volcano Trek",
        area: 269692,
        description: "Arequipa is located directly over one of the tectonic fractures that have created the Andes over millennia. Between the city and Colca Canyon, there’s no shortage of volcanoes to climb.Many trekking providers organize one to three day climbs to nearby volcanoes, including the iconic Misti.Summiting the 19, 101-foot(5, 822 - meter) peak of El Misti is not technically challenging, but the extreme elevation and sandy footing along the way make it hard.The best time for mountain climbing near Arequipa is from July to September.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-volcano-trek.jpg&w=828&q=75"
    },
    {
        placeName: "Take a Trip to the Countryside",
        area: 253449,
        description: "During the colonial period, wealthy landowning families had grand casonas in the city center and sprawling haciendas out in the countryside. You can see what life was like for the Arequipa elite when you venture into the countryside, 15 to 20 minutes outside of the city. Key sites include Molino de Sabandia, an old water mill, and the restored La Mansion del Fundador which belonged to Arequipa’s founder Don Garci Manuel de Carvajal.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-countryside.jpg&w=828&q=75"
    },
    {
        placeName: "Reserva Nacional de Salinas y Aguada Blanca",
        area: 3668.99,
        description: "The road from Arequipa to Colca Canyon travels through the Salinas and Aguada Blanca National Reserve (or, La Reserva Nacional Salinas y Aguada Blanca in Spanish in Spanish. It is one of the region’s underrated, yet spectacular destinations, providing vistas of volcanoes, lagoons, wetlands, and unique flora and fauna that thrive in the extremely high altitude environment.Departing from Arequipa, tours to Colca Canyon begin with a drive northeast through the reserve towards the volcanoes Chachani and Misti.After about two hours, stop at Pampa Cañahuas to observe wild vicuñas and later snap photos from the outlook of Patapampa(4, 820 meters) before beginning the descent into the Colca Valley.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-reserva-nacional.jpg&w=828&q=75"
    },
    {
        placeName: "Colca Canyon",
        area: 1076.39,
        description: "Leave the streets of Arequipa behind and venture to Colca, the second deepest canyon in the world. (The deepest canyon is nearby Cotahuasi). Plummeting valleys shadowed by volcanic peaks, thermal hot springs, and quaint communities are all part of Colca’s charm. Mirador Cruz del Condor is a viewing platform where you can spot flying condors with an 8-foot wingspan and the ultimate highlight of a Colca Canyon tour",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-colca-canyon.jpg&w=828&q=75"
    },
    {
        placeName: "Cotahuasi Canyon",
        area: 2152.78,
        description: "Explore Cotahuasi, the world’s deepest canyon. At its deepest point, the canyon cuts roughly 11,003 ft (3,354 m) into the earth - only slightly deeper than the nearby Colca Canyon - and it extends for 63 mi (100 km). Two peaks, Coropuna and Solimana, rise to 20,000 ft (6,100 m).The majestic Cotahuasi Canyon provides a compelling alternative for travelers who wish to avoid the big tour groups that flood Peru’s more famous destinations.It takes some effort to get here, which perhaps accounts for the low visitor numbers.Travelers should be prepared for basic services and facilities in the tiny towns and villages that dot the canyon.In exchange, you’ll get to see places of surreal beauty.",
        imageUrl:
            "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fd-arequipa-cotohuasi-canyon.jpg&w=828&q=75"
    }

];

createPlacesCard(places);

const oldTempleLink = document.querySelector("#nonUtah");
nonUtahLink.addEventListener("click", () => {
    nonUtahCard(places.filter(temple => !temple.description.includes("Utah")));
});
function createPlacesCard() {
    document.querySelector(".res-grid").innerHTML = "";
    places.forEach(place=> {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let area = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = place.placeName;
        area.innerHTML = `<span class="label">Size:</span> ${place.area} sq ft`;
        description.innerHTML = `<span class="label">Location:</span> ${place.description}`;
        img.setAttribute("src", place.imageUrl);
        img.setAttribute("alt", `${place.placeName} Temple`)
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(area);
        card.appendChild(description);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });

}
