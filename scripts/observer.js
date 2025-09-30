export function observeHeadings(onEnter, onLeave) {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onEnter?.(entry.target);
        entry.target.classList.add("in-view");
      } else {
        onLeave?.(entry.target);
        entry.target.classList.remove("in-view");
      }
    });
  }, {
    root: null,
    threshold: 0.8
  });

  headings.forEach(h => observer.observe(h));
}


export function createObserver(elements, animationClass, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: .3, 
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        obs.unobserve(entry.target); // animate once
      }
    });
  }, mergedOptions);

  elements.forEach(el => {
    observer.observe(el);
  });
}

