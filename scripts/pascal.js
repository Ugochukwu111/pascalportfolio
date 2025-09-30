import { generateProjectCard, generateEcperienceListHTML, Footer , successMessageStatus, errorMessageStatus } from './generatedhtml/views.js';
import { myProjects } from './data/projects.js';
import { myExperiences } from './data/experience.js';
import { observeHeadings, createObserver } from './observer.js';
import { popUpContainer , } from './utils/utils.js'


/**ANIMATIONS SCRIPTS USING OBSERVER */
  observeHeadings(
    (heading) => {
    },
    (heading) => {
    }
  );
  const allSections = document.querySelectorAll('section');
  createObserver(allSections, "fade-in-up");

const projectContainerEl = document.querySelector('.project-container');

//GENERATES FOOTER
Footer('footer-container');

//POPUP CONTAINER ELEMENT
const popupContainerEl = document.querySelector('.popup-container');


(()=>{
let productCard = '';
myProjects.forEach((product)=>{
const tools = product.tools.map(tool => `<li>${tool}</li>`);
const listOfToolsUsed = tools.join('');
   productCard += generateProjectCard(
      product.image, product.name, product.description, listOfToolsUsed, product.url,product.id
   );
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


// EMAILJS CODE/SCRIPTS
  (function(){
    emailjs.init("aERXRL1Z_Z7aNsp00"); // from EmailJS dashboard
  })();

  const form = document.getElementById("contact-me-form");
  const submitFormBtn = document.getElementById("submit-form-btn");
   const submitFormBtnIcon = submitFormBtn.querySelector('svg');

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    submitFormBtn.disabled = true;
    submitFormBtnIcon.classList.add('moving-icon')
    emailjs.sendForm("service_0xakceu", "template_gumb1v7", this)
      .then(() => {
          popUpContainer(popupContainerEl, 'show');
          popupContainerEl.innerHTML = successMessageStatus('Your message was sent successfully ✔️');
          submitFormBtnIcon.classList.remove('moving-icon');
                setTimeout(() => {
         popUpContainer(popupContainerEl, 'hide');
         popupContainerEl.innerHTML = '';
         submitFormBtn.disabled = false;
      }, 3000);
        form.reset();
      }, (err) => {
         popUpContainer(popupContainerEl, 'show')
         popupContainerEl.innerHTML = errorMessageStatus( 'Something went wrong ❌' );
         submitFormBtnIcon.classList.remove('moving-icon');
               setTimeout(() => {
         popUpContainer(popupContainerEl, 'hide');
         popupContainerEl.innerHTML = '';
         submitFormBtn.disabled = false;
      }, 3000);
         
      });
  });