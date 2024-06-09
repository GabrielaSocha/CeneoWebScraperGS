console.log("Hello World")
function highlight() {
  const links = document.querySelectorAll('.navbar')
  console.log(links) 
  if (links.length) {
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        links.forEach((link) => {
            link.classList.remove('active');
        });
        e.preventDefault();
        link.classList.add('active');
      });
    });
  }}