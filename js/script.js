$('.menu-btn').on('click',function(e){e.preventDefault;$('.menu-btn').toggleClass('menu-btn-active')});$('.menu-btn').on('click',function(){$('.burger-menu').toggleClass('b-menu-active')});$('.menu-btn').on('click',function(){$('.section').toggleClass('section-active')})
const makets=[{name:'Tatto Salon',img:'img/wrap1.png'},{name:'new',img:'img/red-bg.jpg'},{name:'new',img:'img/red-bg.jpg'},{name:'new',img:'img/red-bg.jpg'}]
function createMaket(maket){return `
      <div class="maket-wrap item" style="background-image:url(${maket.img})">
      <a href="#">${maket.name}</a>
    </div>
    `}
const templates=makets.map(maket=>createMaket(maket))
const html=templates.join(' ')
document.querySelector('.main-makets').innerHTML=html
