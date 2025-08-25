import { generateProjectCard, generateMoreProductInfo } from './generatedhtml/views.js';
import { myProjects } from './data/projects.js';
import { popUpContainer } from './utils/utils.js';


const projectContainerEl = document.querySelector('.project-container');


function renderProjects(){
let productCard = '';

myProjects.forEach((product)=>{

const tools = product.tools.map(tool => `<li>${tool}</li>`);

const listOfToolsUsed = tools.join('');
   productCard += generateProjectCard(product.image, product.name, product.description, listOfToolsUsed, product.url);

});

projectContainerEl.innerHTML = productCard ;
};

renderProjects();//generates project-card elememt

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