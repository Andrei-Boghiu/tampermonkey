function scrollToElement(element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
  
    const scrollY = window.scrollY || window.pageYOffset;
  
    const centerY = absoluteElementTop - (window.innerHeight / 2);
    const scrollToY = centerY - (window.innerHeight / 2);
  
    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    });
  }
