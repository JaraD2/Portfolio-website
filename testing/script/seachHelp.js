
const Help = document.getElementById('helpSearch');
const HelpText = document.getElementById('helpText');

HelpText.style.display = 'none';

function hover(element){
  element.addEventListener('mouseenter', e => {
    HelpText.style.display = 'block';
  });
  element.addEventListener('mouseleave', e => {
    HelpText.style.display = 'none';
  });
}

hover(Help);
