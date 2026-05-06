import { Footer } from "./generatedhtml/views.js";
import { GenerateNavBarHTML } from '../htmlComponents/components.js';
import { myProjects } from "./data/projects.js";
import { observeHeadings } from './observer.js';

 observeHeadings(
    (heading) => {
      
    },
    (heading) => {
      
    }
  );

GenerateNavBarHTML('nav-bar');
Footer('footer-container');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');



const project =  myProjects.find(p => p.id == id);
let myProjectsTotalNumber = myProjects.length;


let previousEl = document.getElementById('previous-project-link');
let exploreEl = document.getElementById('project-link');
let nextEl = document.getElementById('next-project-link');
let repoBtn = document.querySelector('.view-repo-link');

function handleNextProject(current, total){
  let currentId = Number(current);
  let totalProjectNumber = Number(total);
  let newId = 0;

  if (currentId === totalProjectNumber){
    newId = currentId;
  }
  if(currentId < totalProjectNumber ){
    newId = currentId + 1;
  }
  return newId;
}



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




let nameEl = document.getElementById('project-name') ;
let descriptionEl = document.getElementById('project-description');
let longDescriptionEl = document.getElementById('project-more-description');
let technologyContainer = document.getElementById('tech-used-container');
let dateEl = document.getElementById('project-date');
let typeEl = document.getElementById('project-type')
let clientEl = document.getElementById('project-client');
let image1El = document.getElementById('project-img1');
let image2El = document.getElementById('project-img2');
let image3El = document.getElementById('project-img3');


let githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;


function updateProjectDetails(project) {
  nameEl.textContent = project.name || 'project name';
  descriptionEl.textContent = project.description;
  longDescriptionEl.textContent = project.longDescription;
  dateEl.textContent = project.extraInfo.date || 'date';
  typeEl.textContent = project.extraInfo.type || 'type';
  clientEl.textContent = project.extraInfo.client || 'client';

  if (project.isRepoPrivate){
    repoBtn.innerHTML = `${githubIcon} Private Github Repo`;
     repoBtn.style.opacity = '.5';
     repoBtn.style.cursor = 'not-allowed';
      repoBtn.href = '#';

  }else{
     repoBtn.innerHTML = `${githubIcon} Public Github Repo`;
     repoBtn.href = project.repoLink;
     repoBtn.style.opacity = '1';
     repoBtn.style.cursor = 'pointer';
  }

  image1El.src= project.image[0];
  image2El.src = project.image[1];
  image3El.src = project.image[2];

   image1El.alt= project.name;
  image2El.alt = project.name;
  image3El.alt = project.name;

  exploreEl.href = project.url;
  // nextEl.href=`project.html?id=${nextId}`;
  // previousEl.href=`project.html?id=${previousId}`;
  
const tools = project.tools.map(tool => `<li>${tool}</li>`);
const listOfToolsUsed = tools.join('');
technologyContainer.innerHTML = listOfToolsUsed;

}

updateProjectDetails(project);

let currentId = Number(id); // track current project

previousEl.addEventListener("click", () => {
  let previousId = handlePreviousProject(currentId, myProjectsTotalNumber);
  const newProject = myProjects.find(p => p.id == previousId);

  updateProjectDetails(newProject);
  history.pushState({}, "", `?id=${previousId}`);

  currentId = previousId;
  window.scrollTo(0,0);
});

nextEl.addEventListener("click", () => {
  let nextId = handleNextProject(currentId, myProjectsTotalNumber);
  const newProject = myProjects.find(p => p.id == nextId);

  updateProjectDetails(newProject);
  history.pushState({}, "", `?id=${nextId}`);
  currentId = nextId;
  window.scrollTo(0,0);

});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  currentId = Number(id);
  const newProject = myProjects.find(p => p.id == currentId);
  if (newProject) updateProjectDetails(newProject);
});