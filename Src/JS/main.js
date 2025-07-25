

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

  // window.addEventListener("wheel", (e) => {

  //   const BlocksContainer= document.querySelector('.blocks-container');
  //   const video=document.querySelector('.bg-video');
  //     const rect = BlocksContainer.getBoundingClientRect();
  //     const inView = rect.top <= 0 && rect.bottom > 0;
  //     // IntersectionObserver(BlocksContainer);
  //     if (inView) {
  //       e.preventDefault();
  //       video.classList.add('brightness-[0.2]');
  //     }else{
  //       video.classList.remove('brightness-[0.2]');
  //     }
  //   }, {});


  //   const observer = new IntersectionObserver(
  //     (entry) => {
  //         const video=document.querySelector('.bg-video');
  //         if (entry.isIntersecting) {
  //           // e.preventDefault();
  //           video.classList.add('blur-sm', 'grayscale');
  //         } else {
  //           video.classList.remove('blur-sm', 'grayscale');
  //         }

  //     },
  //     {
  //       threshold: 0.6, // Trigger when 60% of section is in view
  //     }
  //   );

    //   const BlockItem= document.querySelector('.block-item');
    //   const rect2 = BlockItem.getBoundingClientRect();
    //   const inView2 = rect2.top <= 0 && rect2.bottom > 0;

    //   if (inView2) {
    //     e.preventDefault();
    //     BlockItem.classList.add('-translate-y-4');
    //   }else{
    //     BlockItem.classList.remove('-translate-y-4');
    //   }

    // const BlockItems=document.querySelectorAll('.block-item');
    //  const BlockItemsAll=document.querySelectorAll('.block-item');

    
    



