const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const container = document.getElementById('container');
const bar = document.getElementById('bar');

let counter = 0;

updateBar();

function updateBar() {
  bar.textContent = counter + '%';

  bar.style.width = counter + '%';

  counter++;

  if (counter < 101) {
    setTimeout(() => {
      updateBar();
    }, 1000);
  }
}
