const flighPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
      {x: 150, y:-20},
      {x: 300, y:-10},
      {x: 500, y:100},
      {x: 750, y:-100},
      {x: 350, y:-50},
      {x: 600, y:100},
      {x: 800, y:0},
      {x: window.innerWidth, y:-50}
      
  ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".airplane", 1, {
        bezier: flighPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene  = new ScrollMagic.Scene({
   triggerElement: ".animation",
   duration: 1000,
   triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)
