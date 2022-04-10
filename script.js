// const colorSelector=document.querySelector('#color-select');
// const option=document.createElement('option');
// option.value="red";
// option.text="red";
// colorSelector.add(option);
const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

// loadEventListeners();
// function loadEventListeners(e){
//   const myTimeout = setTimeout(setColorDefault, 5000);

// function setColorDefault() {
//   document.getElementById("box").style.backgroundColor=colorSelector.value;
// }
// }

const colorSelector=document.querySelector('#color-select');
for(const [index,a] of data.entries()){
  const opt=document.createElement('option');
  opt.value=a;
  opt.innerHTML=a;
  colorSelector.appendChild(opt);
}
colorSelector.addEventListener('change',changeColor);
function changeColor(){

  document.getElementById('box').style.backgroundColor=colorSelector.value;
  const myTimeout = setTimeout(setColorDefault, 2000);
}

function setColorDefault() {  
   document.getElementById("box").style.backgroundColor='silver';
   }

