export function generateProjectCard(image, name, desc, tools, demoLink, id){
  const html = `
    <div class="project-card">
                  <figure>
                    <img src="${image[0]}" alt="${name}">
                  </figure>
                  <div>
                    <p class="project-description">
                      <strong class="d-block text-blue-dark text-end">${name}</strong>
                      ${desc}
                    </p>
                    <ul class="project-tools-list">
                      ${tools}
                    </ul>
                  </div>

                  <div class="view-project-btn-container">
                    <a href="${demoLink}"class="bg-blue-dark text-white text-icon-container">
                      live demo
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                    </a>

                    <a href="project.html?id=${id}" class="text-icon-container bg-green">
                      more info
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </div>

                </div>
  `;

  return html
}

export function generateMoreProductInfo(image, name, moreInfo){
  const html = `
    <div>
      <figure>
      <img src ="${image}" alt="${name}">
      </figure>
      <h2>
       ${name}
      </h2>
      <p>
       ${moreInfo}
      </p>
    </div>
  `;

  return html;
}

export function generateEcperienceListHTML (timeLine, role, company){
  const html = `
                   <li>
                  <span class="text-grey">
                    ${timeLine}
                  </span>

                  <div>
                      <span class="PS">
                        ${role} 
                      </span>
                      <button class="company-name font-body ">
                        @ ${company}
                      </button>
                  </div>
                </li>
  `;

  return html
}

export function Footer(footerContainer){
  const html = `
          <div>
              <br><hr><br> <br>
              <p class="text-center">
            © 2025 Joseph Pascal
            </p>      
            <ul class="social-icons-container d-flex">
              <li title="X">
                <a href="https://x.com/Pas_Cal_001">
                  <!-- x icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </li> 

              <li title="Git Hub">
                <a href="https://github.com/Ugochukwu111">
                  <!-- git hub icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </li> 

              <li title="LinkedIn">
                <a href="https://www.linkedin.com/in/pascal001/">
                  <!-- linkedin icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </li> 

              <li title="Email">
                <!-- mail icon -->
                <a href="mailto:pascaljoseph729@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </a>
              </li> 
            </ul>
             <p class = "text-center font-small">
              Built with  HTML, CSS & JS
             </p>
            </div>
  `;


  document.getElementById(`${footerContainer}`).innerHTML = html;
 
}

export function successMessageStatus(message){
  const html = `
    <div class="grid-center pop-up-box">
      <svg class = "text-green" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-check-icon lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg>
       <br> <br>
      <p class="text-center FWB">
       ${message}
      </p>
    </div>
  `;

  return html;
}

export function errorMessageStatus(message){
  const html = `
    <div class="grid-center pop-up-box">
<svg class = "text-red" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-warning-icon lucide-mail-warning"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M20 14v4"/><path d="M20 22v.01"/></svg>
       <br> <br>
      <p class="text-center FWB">
       ${message}
      </p>
    </div>
  `;

  return html;
}

