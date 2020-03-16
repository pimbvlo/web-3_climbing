var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:burgerSpeed, rotate:-90},"create-x")
.to("#top-line",{duration:burgerSpeed, y: 7.75, rotate:45},"create-x")
.to("#middle-line",{duration:burgerSpeed, alpha:0},"create-x")
.to("#bottom-line",{duration:burgerSpeed, y: -7.75, rotate:-45},"create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

var lineToLines = gsap.timeline({paused:true});
lineToLines.to("#top-line",{duration:burgerSpeed, y:0},"move-lines")
.to("#middle-line",{duration:burgerSpeed, alpha: 1},"move-lines")
.to("#bottom-line",{duration:burgerSpeed, y:0},"move-lines");


var staggerNav = gsap.timeline({paused:true});
staggerNav.to("#nav-bg", {duration: burgerSpeed+(burgerSpeed/8), scale: 45, alpha: 0.98})
.to("#nav-bg svg circle", {duration: burgerSpeed, alpha: 0.95}, "-=burgerSpeed")
.to("nav ul li", {duration:burgerSpeed/4, stagger:0.1, alpha:1, y: 10, display:"initial"}, "-=0.15");

$('#burger-container').on("click", burgerClicked);

// function getPositionAtCenter(element) {
//    const {top, left, width, height} = element.getBoundingClientRect();
//    return {
//      x: left + width / 2,
//      y: top + height / 2
//    };
// }
// function getDistanceBetweenElements(a, b) {
// const aPosition = getPositionAtCenter(a);
// const bPosition = getPositionAtCenter(b);
//
//
// var scrollToDistance = aPosition.y - bPosition.y;
// console.log(scrollToDistance);
// return scrollToDistance;
//
// }

function burgerClicked(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#burger-outline",{duration:burgerSpeed, alpha:1});
        lineToX.invalidate().restart();
        staggerNav.invalidate().restart();
        linesToLine.invalidate().restart();


        lineToX.play();
        staggerNav.play();
        // linesToLine.reverse();



        canYouSeeNav = true;
    }else{
        gsap.to("#burger-outline",{duration:burgerSpeed, alpha:0});
        lineToLines.invalidate().restart();
        // staggerNav.invalidate().restart();
        // lineToX.invalidate().restart();

        lineToX.reverse();
        staggerNav.reverse();
        lineToLines.play();

        // var distance = getDistanceBetweenElements($(this).scrollTop(), contentSections[$('nav ul li').index(this)]);
        // gsap.to(window, {duration: 1, scrollTo:{y:contentSections[$('nav ul li').index(this)], offsetY:72}});
        // gsap.to(window, {duration: Math.abs(distance/1), scrollTo:{y:contentSections[$('nav ul li').index(this)], offsetY:72}});

// console.log(contentSections[$('nav ul li').index(this)]);
        canYouSeeNav = false;
    }
}
