export function generateProjectCard(image, name, desc, tools, demoLink){
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

                    <button class="text-icon-container">
                      more info
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
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