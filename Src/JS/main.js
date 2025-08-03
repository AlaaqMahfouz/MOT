// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();

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


const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


var swiper = new Swiper(".fraction-slide-carousel", {
loop: true,
fraction: true,
navigation: {
  nextEl: ".fraction-slide-carousel .swiper-button-next",
  prevEl: ".fraction-slide-carousel .swiper-button-prev",
},
pagination: {
  el: '.fraction-slide-carousel .swiper-pagination',
  type: 'fraction',
  formatFractionCurrent: function(number) {
    return number;
  }
},
});

class ImageSlider {
  constructor() {
      this.currentSlide = 0;
      this.totalSlides = 4;
      this.isAutoPlaying = true;
      this.autoPlayInterval = null;
      this.isDragging = false;
      this.startX = 0;
      
      this.sliderTrack = document.getElementById('sliderTrack');
      this.prevBtn = document.getElementById('prevBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.dotsContainer = document.getElementById('dotsContainer');
      this.autoPlayIndicator = document.getElementById('autoPlayIndicator');
      this.slider = document.getElementById('imageSlider');
      
      this.init();
  }
  
  init() {
      this.setupEventListeners();
      this.startAutoPlay();
      this.updateSlider();
  }
  
  setupEventListeners() {
      // Arrow buttons
      this.prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.prevSlide();
          this.pauseAutoPlay();
      });
      
      this.nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.nextSlide();
          this.pauseAutoPlay();
      });
      
      // Dots
      this.dotsContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('dot')) {
              const slideIndex = parseInt(e.target.dataset.slide);
              this.goToSlide(slideIndex);
              this.pauseAutoPlay();
          }
      });
      
      // Mouse drag
      this.slider.addEventListener('mousedown', this.handleMouseDown.bind(this));
      this.slider.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.slider.addEventListener('mouseup', this.handleMouseUp.bind(this));
      this.slider.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      
      // Touch drag
      this.slider.addEventListener('touchstart', this.handleTouchStart.bind(this));
      this.slider.addEventListener('touchmove', this.handleTouchMove.bind(this));
      this.slider.addEventListener('touchend', this.handleTouchEnd.bind(this));
      
      // Prevent context menu on right click
      this.slider.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  
  nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.updateSlider();
  }
  
  prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.updateSlider();
  }
  
  goToSlide(index) {
      this.currentSlide = index;
      this.updateSlider();
  }
  
  updateSlider() {
      // Update track position
      this.sliderTrack.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      
      // Update dots
      document.querySelectorAll('.dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === this.currentSlide);
      });
  }
  
  startAutoPlay() {
      this.isAutoPlaying = true;
      this.autoPlayIndicator.classList.remove('paused');
      this.autoPlayInterval = setInterval(() => {
          this.nextSlide();
      }, 4000);
  }
  
  pauseAutoPlay() {
      this.isAutoPlaying = false;
      this.autoPlayIndicator.classList.add('paused');
      clearInterval(this.autoPlayInterval);
      
      // Resume after 2 seconds
      setTimeout(() => {
          this.startAutoPlay();
      }, 2000);
  }
  
  // Mouse drag handlers
  handleMouseDown(e) {
      this.isDragging = true;
      this.startX = e.clientX;
      this.slider.style.cursor = 'grabbing';
      this.pauseAutoPlay();
  }
  
  handleMouseMove(e) {
      if (!this.isDragging) return;
      e.preventDefault();
  }
  
  handleMouseUp(e) {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.slider.style.cursor = 'grab';
      
      const endX = e.clientX;
      const deltaX = this.startX - endX;
      const threshold = 50;
      
      if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
              this.nextSlide();
          } else {
              this.prevSlide();
          }
      }
  }
  
  handleMouseLeave() {
      this.isDragging = false;
      this.slider.style.cursor = 'grab';
  }
  
  // Touch drag handlers
  handleTouchStart(e) {
      this.isDragging = true;
      this.startX = e.touches[0].clientX;
      this.pauseAutoPlay();
  }
  
  handleTouchMove(e) {
      if (!this.isDragging) return;
      e.preventDefault();
  }
  
  handleTouchEnd(e) {
      if (!this.isDragging) return;
      this.isDragging = false;
      
      const endX = e.changedTouches[0].clientX;
      const deltaX = this.startX - endX;
      const threshold = 500;
      
      if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
              this.nextSlide();
          } else {
              this.prevSlide();
          }
      }
  }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ImageSlider();
});



// console.log('hh');

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

    
    



