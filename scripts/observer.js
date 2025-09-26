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