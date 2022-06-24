const entities = [
    {
      text: 'Admiral',
      img: './images/photo1.jpg'
    },
    {
      text: 'Sochi',
      img: './images/photo2.jpg'
    },
    {
      text: 'Patriotic',
      img: './images/photo3.jpg'
    }
]
  
const img = document.querySelector('#design_img');

const design_nav1 = document.querySelector('#design_nav1');
const design_nav2 = document.querySelector('#design_nav2');
const design_nav3 = document.querySelector('#design_nav3');

const btn_nav1 = document.querySelector('#button_nav1');
const btn_nav2 = document.querySelector('#button_nav2');
const btn_nav3 = document.querySelector('#button_nav3');

const btn_nav = document.querySelectorAll('.rectangle1');
const design_nav = document.querySelectorAll('.main-nav_item');
console.log(design_nav)
console.log(btn_nav)

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
console.log(img)

const setEntity = (index) => {
  img.src = `./images/photo${index}.jpg`;
   switch(index) {
    case 1:
      design_nav1.classList.add('active');
      design_nav2.classList.remove('active');
      design_nav3.classList.remove('active');

      btn_nav1.classList.add('active_btn');
      btn_nav2.classList.remove('active_btn');
      btn_nav3.classList.remove('active_btn');
      break;
    case 2:
      design_nav2.classList.add('active');
      design_nav1.classList.remove('active');
      design_nav3.classList.remove('active');

      btn_nav2.classList.add('active_btn');
      btn_nav1.classList.remove('active_btn');
      btn_nav3.classList.remove('active_btn');
      break
    case 3:
      design_nav3.classList.add('active');
      design_nav1.classList.remove('active');
      design_nav2.classList.remove('active');

      btn_nav3.classList.add('active_btn');
      btn_nav1.classList.remove('active_btn');
      btn_nav2.classList.remove('active_btn');
  }
}


let curIndex = 1;

design_nav[0].addEventListener('click', () =>{
  setEntity(1);
    curIndex = 1;
})

design_nav[1].addEventListener('click', () =>{
  setEntity(2);
    curIndex = 2;
})

design_nav[2].addEventListener('click', () =>{
  setEntity(3);
    curIndex = 3;
})

btn_nav[0].addEventListener('click', () =>{
  setEntity(1);
    curIndex = 1;
})

btn_nav[1].addEventListener('click', () =>{
  setEntity(2);
    curIndex = 2;
})

btn_nav[2].addEventListener('click', () =>{
  setEntity(3);
    curIndex = 3;
})  

next.addEventListener('click', () => {
  if(curIndex + 1 >= 4){
    setEntity(1);
      curIndex = 1;
  } else{
    setEntity(curIndex + 1);
      curIndex += 1;
  }
})

prev.addEventListener('click', () => {
  if(curIndex - 1 <= 0){
    setEntity(3);
      curIndex = 3;
  } else{
    setEntity(curIndex - 1);
      curIndex -= 1;
  }
  
})