# Joseph Pascal's Portfolio

A modern, responsive portfolio website showcasing frontend development expertise and creative engineering projects.

## Tech Stack

**Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)  
**Animations:** Intersection Observer API  
**Email Service:** EmailJS  
**Architecture:** Vanilla JS with modular design

## Key Features

- Responsive mobile-first design with CSS Grid & Flexbox
- Dynamic project showcase with smooth animations
- Performance optimized (Lighthouse: 92+)
- SEO optimized with semantic HTML
- EmailJS contact form integration
- Zero external dependencies (except EmailJS)

## Project Structure

```
myPortfolio/
├── index.html              # Landing page
├── project.html            # Project detail template
├── scripts/
│   ├── pascal.js          # Main entry point
│   ├── viewProject.js     # Project detail logic
│   ├── observer.js        # Animation utilities
│   ├── data/
│   │   ├── projects.js    # Portfolio data
│   │   └── experience.js  # Experience timeline
│   └── generatedhtml/
│       └── views.js       # HTML generators
├── styles/
│   ├── pascal.css         # Landing page
│   ├── project.css        # Project pages
│   └── utils.css          # Utilities
└── images/project/        # Project screenshots
```

## Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/myPortfolio.git
cd myPortfolio

# Local development - Choose one:
python -m http.server 8000    # Python
node -e "require('http').createServer((req, res) => {
  const fs = require('fs');
  res.end(fs.readFileSync('.' + req.url));
}).listen(8000)"              # Node.js
# OR use VS Code Live Server extension
```

Open `http://localhost:8000`

## Adding Projects

1. Edit [scripts/data/projects.js](scripts/data/projects.js):
```javascript
export const myProjects = [
  {
    id: 4,
    name: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    tools: ["REACT", "JAVASCRIPT"],
    image: ["../images/project/name/img1.png"],
    url: "https://project-link.com"
  }
];
```

2. Add images to `images/project/projectname/`
3. Refresh browser - no rebuild needed

## Adding Experience

Edit [scripts/data/experience.js](scripts/data/experience.js):
```javascript
export const myExperiences = [
  {
    timeLine: "Jan 2024 - Present",
    role: "Your Role",
    company: "Company Name",
    details: ""
  }
];
```

## Deployment

**GitHub Pages:**
```bash
git checkout -b gh-pages
git push origin gh-pages
```
Then enable in repository settings.


## Contact

**Joseph Pascal** | Frontend Developer | Idealist Builder

- Portfolio: [Live Site](https://pascaljoseph.vercel.app/)
- Email: Contact form on portfolio
- GitHub: [GitHub Profile](https://github.com/Ugochukwu111)

---

© 2026 Joseph Pascal. Built with modern web technologies.

```

#### ES6 Features Used

```javascript
// Arrow functions
const handleClick = (event) => { };

// Template literals
const html = `<div>${name}</div>`;

// Destructuring
const { id, name, tools } = project;

// Spread operator
const newArray = [...existingArray, newItem];

// Array methods
myProjects.map(p => p.name);
myProjects.filter(p => p.id === 1);
```


## Contact & Support

### Project Owner

**Name:** Joseph Pascal  
**Title:** Frontend Developer & Idealist Builder  
**Location:** Remote

### Contact Methods

- **Email:** [contact form on portfolio]
- **GitHub:** [github.com/yourprofile](https://github.com/yourprofile)
- **LinkedIn:** [linkedin profile]
- **Twitter:** [@yourhandle](https://twitter.com)

### Support Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

### Reporting Issues


## License

This project is a personal portfolio. Please respect intellectual property rights.

**© 2026 Joseph Pascal Ugochukwu. All rights reserved.**

---

## Changelog

### Version 1.0.0 (Current)

- Initial portfolio launch
- 4 featured projects
- Contact form with EmailJS
- Responsive design
- SEO optimization
- Animation effects
- Experience timeline

---



**Last Updated:** May 3, 2026  
**Maintained By:** Joseph Pascal  
**Status:** ✅ Active & Maintained
