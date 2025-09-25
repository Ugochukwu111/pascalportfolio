import { Footer } from "./generatedhtml/views.js";
import { GenerateNavBarHTML } from '../htmlComponents/components.js';
import { myProjects } from "./data/projects.js";

GenerateNavBarHTML('nav-bar');
Footer('footer-container');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');



const project =  myProjects.find(p => p.id == id);

let myProjectsTotalNumber = myProjects.length;

function handleNextProject(current, total){
  let currentId = Number(current);
  let totalProjectNumber = Number(total);
  let newId = 0;

  if (currentId === totalProjectNumber){
    newId = currentId;
  }
  if(currentId < totalProjectNumber){
    newId = currentId + 1;
  }
  return newId;
}

let nextId = handleNextProject(id, myProjectsTotalNumber);

function handlePreviousProject(current, total){
  let currentId = Number(current);
  let totalProjectNumber = Number(total);
  let newId = 0;

  if(currentId === 1){
    newId = 1;
  }else if(currentId <= totalProjectNumber && currentId !== 1){
    newId = currentId - 1;
  }
  return newId;
}

let previousId = handlePreviousProject(id, myProjectsTotalNumber);


let nameEl = document.getElementById('project-name');
let descriptionEl = document.getElementById('project-description');
let longDescriptionEl = document.getElementById('project-more-description');
let technologyContainer = document.getElementById('tech-used-container');
let dateEl = document.getElementById('project-date');
let typeEl = document.getElementById('project-type')
let clientEl = document.getElementById('project-client');
let previousEl = document.getElementById('previous-project-link');
let exploreEl = document.getElementById('project-link');
let nextEl = document.getElementById('next-project-link');
let image1El = document.getElementById('project-img1');
let image2El = document.getElementById('project-img2');
let image3El = document.getElementById('project-img3');


function updateProjectDetails(project) {
  nameEl.textContent = project.name;
  descriptionEl.textContent = project.description;
  longDescriptionEl.textContent = project.longDescription;
  dateEl.textContent = project.extraInfo.date || 'date';
  typeEl.textContent = project.extraInfo.type || 'type';
  clientEl.textContent = project.extraInfo.client || 'client';

  image1El.src= project.image[0];
  image2El.src = project.image[1];
  image3El.src = project.image[2];

   image1El.alt= project.name;
  image2El.alt = project.name;
  image3El.alt = project.name;

  exploreEl.href = project.url;
  nextEl.href=`project.html?id=${nextId}`;
  previousEl.href=`project.html?id=${previousId}`;
  
  

}

updateProjectDetails(project)