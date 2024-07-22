document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text1');
    let isLoveVisible = true;
  
    setInterval(() => {
      textElement.style.opacity = isLoveVisible ? 0 : 1;
      isLoveVisible = !isLoveVisible;
    }, 1000);
  });
  