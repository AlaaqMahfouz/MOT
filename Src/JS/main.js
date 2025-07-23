

// Video Filter on hover
const NavbarItems = document.querySelectorAll('.navbar-item');
const BgVideo = document.querySelectorAll('.bg-video');

NavbarItems.forEach(target => {
  target.addEventListener('mouseenter', () => {
    BgVideo.forEach(el => {
      el.classList.add('blur-sm', 'grayscale');
    });
  });

  target.addEventListener('mouseleave', () => {
    BgVideo.forEach(el => {
      el.classList.remove('blur-sm', 'grayscale');
    });
  });
});



// horizontal scroll 
  //   function scrollH(e){
  //     e.preventDefault();
  //     e=window.event || e;
  //     let delta=Math.max(-1,Math.min(1,(e.wheelDelta || -e.detail)));
  //     document.querySelector('.blocks-container').scrollLeft-=(delta*40);
  //     document.querySelector('.hide-scrollbar').scroll=0;
  //   }
  //   if(document.querySelector('.blocks-container').
  // addEventListener){
  //   document.querySelector('.blocks-container').addEventListener('mousewheel',scrollH,false);
  //   document.querySelector('.blocks-container').addEventListener('DOMMouseScroll',scrollH,false);
  // }

  window.addEventListener("wheel", (e) => {
    const wrapper= document.querySelector('.blocks-container');
    const video=document.querySelector('.bg-video');
      const rect = wrapper.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > 0;

      if (inView) {
        e.preventDefault();
        video.classList.add('brightness-[0.2]');
      }else{
        video.classList.remove('brightness-[0.2]');
      }
    }, {  });
