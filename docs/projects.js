const projecten = [
    {
    titel: "Hotel simulator",
    beschrijving: "simulating a real life hotel with events",
    afbeelding: "image.png",
    alt: "Een screenshot van een 2d hotel layout met gasten en schoonmakers in beeld",
    link: "https://github.com/DimiS0/Hotel-simulatie---groep-7-",
    kaartKlasse: "project-card1",
    imageKlasse: "project-image",
    descKlasse: "project-description",
    tag: "C"
},
{
     titel: "Recycling app",
    beschrijving: "an application for our trashcan that scans plastic with an API and opens it, if its correct",
    afbeelding: "image2.png",
    alt: "Een screenshot van een log-in scherm van een prullen bak project",
    link: "https://github.com/DimiS0/Coderen3",
    kaartKlasse: "project-card2",
    imageKlasse: "project-image2",
    descKlasse: "project-description2",
    tag: "Java"
}
]

const filtersection = document.getElementById("sorteerbuttons");

const filterbutton = document.createElement("button");
filterbutton.classList.add("button");
filterbutton.textContent = "Filter op Java"

const toonAlles = document.createElement("button");
toonAlles.classList.add("button");
toonAlles.textContent = "Toon alles"

const filterbutton2 = document.createElement("button");
filterbutton2.classList.add("button");
filterbutton2.textContent = "Filter op C"

const grid = document.getElementById("project-card-grid");

toonAlles.addEventListener("click", () => {
    ProjectenLatenZien(projecten);
}); 

filterbutton.addEventListener("click", () => {
    const gefilterd = sorteerProjectOpTag(projecten, "Java");
    ProjectenLatenZien(gefilterd);
}); 

filterbutton2.addEventListener ("click", () => {
    const gefilterd = sorteerProjectOpTag(projecten, "C");
    ProjectenLatenZien(gefilterd);
})

const sorteerProjectOpTag = (projecten, sorteeroptie) => {
    return projecten.filter((project) => {
        return project.tag === sorteeroptie;
    });
};


    

const ProjectenLatenZien = (lijst) => {
    grid.innerHTML = "";

    lijst.forEach(projecten => {
        const artiekel = document.createElement("Article");
        artiekel.classList.add(projecten.kaartKlasse);

        artiekel.innerHTML = `<div class = "${projecten.imageKlasse}"> 
                            <img src = "${projecten.afbeelding}"alt="${projecten.alt}"></img>
                            </div>
                            <div class = "${projecten.descKlasse}">
                            <h3>${projecten.titel}</h3>
                            <p>${projecten.beschrijving}</p>
                            <a href = "${projecten.link}"><strong>View project</strong></a>
                            </div>
                            `;   
       grid.appendChild(artiekel);                       
    });
    filtersection.appendChild(toonAlles); 
    filtersection.appendChild(filterbutton); 
    filtersection.appendChild(filterbutton2);
}

ProjectenLatenZien(projecten);