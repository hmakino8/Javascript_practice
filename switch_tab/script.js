const tabs = document.querySelectorAll('.tabs li a');
const contents = document.querySelectorAll('.contents li');

console.log(tabs);
console.log(contents);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    tabs[i].classList.add('active')
    contents[i].classList.add('active');
    for (let j = 0; j < tabs.length; j++) {
      if (i !== j) {
        tabs[j].classList.remove('active')
        contents[j].classList.remove('active');
      }
    }
  });
}
