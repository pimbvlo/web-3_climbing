var inviewQuote1 = new Waypoint.Inview({
    element: $('#section-2')[0],
    enter: function(direction) {
        // $.notify('Famous Players enter triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "enter");
    },
    entered: function(direction) {
        // $.notify('Famous Players entered triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "entered");
    },
    exit: function(direction) {
        // $.notify('Famous Players exit triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exit");
    },
    exited: function(direction) {
        // $.notify('Famous Players exited triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exited");
    },
    offset: {
        top: 80,
        bottom: 80
    }
})

var inviewIndoorClimbing = new Waypoint.Inview({
    element: $('#section-5')[0],
    enter: function(direction) {
        // $.notify('Famous Players enter triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "enter");
    },
    entered: function(direction) {
        // $.notify('Famous Players entered triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "entered");
    },
    exit: function(direction) {
        // $.notify('Famous Players exit triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exit");
    },
    exited: function(direction) {
        // $.notify('Famous Players exited triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exited");
    },
    offset: {
        top: 80,
        bottom: 80
    }
})

function headerBarChange(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("header",{duration:0.5,backgroundColor:"#261111"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#F4F4F4"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#F4F4F4",stagger:0.15,delay:0.25});
        gsap.to(".cls-1",{duration:0.25, fill:"#F4F4F4"});
        gsap.to("header>div aside p",{duration:0.25, color:"#F4F4F4"});
    }

    else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("header",{duration:0.25,backgroundColor:"#F4F4F4"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#211712"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#211712",stagger:0.15,delay:0.25});
        gsap.to(".cls-1",{duration:0.25, fill:"#211712"});
        gsap.to("header>div aside p",{duration:0.25, color:"#211712"});

    }

    else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("header",{duration:0.25,backgroundColor:"#261111"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#F4F4F4"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#F4F4F4",stagger:0.15,delay:0.25});
        gsap.to(".cls-1",{duration:0.25, fill:"#F4F4F4"});
        gsap.to("header>div aside p",{duration:0.25, color:"#F4F4F4"});

    }

    else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("header",{duration:0.25,backgroundColor:"#F4F4F4"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#211712"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#211712",stagger:0.15,delay:0.25});
        gsap.to(".cls-1",{duration:0.25, fill:"#211712"});
        gsap.to("header>div aside p",{duration:0.25, color:"#211712"});

    }

}
