 const track = document.getElementById("image-track");

window.onmousedown = e =>{
   track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e =>{
    if(track.dataset.mouseDownAt === "0")return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt)-e.clientX,
    maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta/maxDelta)*-100,
    nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage
    track.dataset.percentage= Math.min(Math.max(nextPercentage, -100), 0);
    
    track.animate({transform: `translate(${nextPercentage}%, -50%)`},{duration: 1200, fill: "forwards"})
    for (const image of track.getElementsByClassName("SwipeBox")) {
        image.animate({objectPosition:`${nextPercentage+100}% 0%`
    },{duration: 1200, fill: "forwards"})
    }
    
}

window.onmouseup =()=>{
    track.dataset.mouseDownAt="0";
    track.dataset.prevPercentage=track.dataset.percentage;
}

const menutoggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  const list = document.querySelectorAll('.list');
  const fixedDiv = document.getElementById('fixed');
  const containers = document.querySelectorAll('.detectionContainer');
  const mainContainers = document.querySelectorAll('.MainContainer');
  const pageContainers = document.querySelectorAll('.PageContainer');

  window.onmousedown = e =>{
    track.dataset.mouseDownAt = e.clientX;
 }
 
 window.onmousemove = e =>{
     if(track.dataset.mouseDownAt === "0")return;
 
     const mouseDelta = parseFloat(track.dataset.mouseDownAt)-e.clientX,
     maxDelta = window.innerWidth/2;
 
     const percentage = (mouseDelta/maxDelta)*-100,
     nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage
     track.dataset.percentage= Math.min(Math.max(nextPercentage, -100), 0);
     
     track.animate({transform: `translate(${nextPercentage}%, -50%)`},{duration: 1200, fill: "forwards"})
     for (const image of track.getElementsByClassName("SwipeBox")) {
         image.animate({objectPosition:`${nextPercentage+100}% 0%`
     },{duration: 1200, fill: "forwards"})
     }
     
 }
 
 window.onmouseup =()=>{
     track.dataset.mouseDownAt="0";
     track.dataset.prevPercentage=track.dataset.percentage;
 }


  window.onload = function() {
    mainContainers[0].classList.add('trigger');
  pageContainers[0].classList.add('trigger');
  list[0].classList.add('active');
  };
  function natural()
  {

  }
function removeOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.style.top = '100%';
    setTimeout(function() {
      overlay.parentNode.removeChild(overlay);
    }, 500);
  }
  
  menutoggle.onclick = function name() {
    navigation.classList.toggle('open')
    
    pageContainers.classList.add('open')
} 


menutoggle.onclick = function name() {
    navigation.classList.toggle('open')
    if (navigation.classList.contains('open')) {
      for (let index = 0; index < pageContainers.length; index++) {
         pageContainers[index].classList.add('open');
        
      }
    } else {
      for (let index = 0; index < pageContainers.length; index++) {
        pageContainers[index].classList.remove('open');
        
      }
    }
}
function activeLink (){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=> item.addEventListener('click',activeLink))


  
  
  
  window.addEventListener('scroll', function() {
  const fixedDivRect = fixedDiv.getBoundingClientRect();
  
  for (let i = 0; i < containers.length; i++){
    const containerRect = containers[i].getBoundingClientRect();
    if (containerRect.top <= fixedDivRect.bottom && containerRect.bottom >= fixedDivRect.top) {
      for (let x = 0; x < containers.length; x++){
        mainContainers[x].classList.remove('trigger');
        pageContainers[x].classList.remove('trigger');
        list[x].classList.remove('active')
        if(i===x){
          mainContainers[i].classList.add('trigger');
        pageContainers[i].classList.add('trigger');
        list[i].classList.add('active');
        }
  
      }
    
    }
  };

});

function smoothScroll(elemId) {
  const elem = document.getElementById(elemId);
  if (!elem) return;

  const elemRect = elem.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = scrollTop + elemRect.top;

  window.scroll({
    top: targetY,
    behavior: "smooth"
  });
}

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const elemId = href.substr(1);
    smoothScroll(elemId);
  });
});