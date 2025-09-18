import { generateProjectCard, generateEcperienceListHTML } from './generatedhtml/views.js';
import { myProjects } from './data/projects.js';
import { popUpContainer } from './utils/utils.js';
import { myExperiences } from './data/experience.js';


const projectContainerEl = document.querySelector('.project-container');

(()=>{
let productCard = '';
myProjects.forEach((product)=>{
const tools = product.tools.map(tool => `<li>${tool}</li>`);
const listOfToolsUsed = tools.join('');
   productCard += generateProjectCard(product.image, product.name, product.description, listOfToolsUsed, product.url);

});
projectContainerEl.innerHTML = productCard ;
})();//generates project-card elememt

(()=>{
   let experienceList = '';
   myExperiences.forEach((experience)=>{
      experienceList += generateEcperienceListHTML(
         experience.timeLine, experience.role, experience.company
      );
   });
      document.querySelector('.experience-list').innerHTML = experienceList;
})()



const allProjectCard = document.querySelectorAll('.project-card');
if(allProjectCard){
    allProjectCard.forEach((card)=>{
      card.addEventListener('click',(e)=>{
         if (e.target instanceof HTMLImageElement){
              e.target.requestFullscreen();
         }
      });
    });
}