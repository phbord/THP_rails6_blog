const countButton = document.querySelector('#count-btn');
const counter = document.querySelector('#counter');
countButton.addEventListener('click', function(e){
  e.preventDefault();
  const count = document.querySelectorAll('.card').length;
  counter.textContent = count;
})