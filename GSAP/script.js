// console.log(gsap)
// gsap.to("#box", {
//   x: 800,
//   duration: 5,
//   delay:1,
//   backgroundColor: 'blue',
//   rotate:360,
//   borderRadius:'50%',
//   scale:0.5,
//   repeat:-1,
//   yoyo:true
// })

// gsap.from('h1',{
//     y:100,
//     duration:1,
//     opacity:0,
//     delay:1,
//     stagger:0.5,
//     repeat:-1,
//     yoyo:true

// })

let tl=gsap.timeline()

tl.to('#box1',{
    x:800,
    duration:2.5,
    rotate:"360deg"  
})
tl.to('#box2',{
    x:800,
    duration:2.5,
    rotate:"360deg"  
})
tl.to('#box3',{
    x:800,
    duration:2.5,
    rotate:"360deg"  
})
tl.to('#box4',{
    x:800,
    duration:2.5,
    rotate:"360deg"  
})
tl.to('#box5',{
    x:800,
    duration:2.5,
    rotate:"360deg"  
})