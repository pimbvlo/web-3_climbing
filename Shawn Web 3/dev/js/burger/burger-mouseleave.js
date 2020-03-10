$("#burger-container").on("mouseleave", function() {
    // console.log("mouse leave");
    if (canYouSeeNav === false) {
        console.log("is open false mouseLeave");
        linesToLine.invalidate().restart();
        // lineToX.invalidate().restart();

        // play the timeline to combine the lines into 1 line
        linesToLine.reverse();
    }else{
        console.log("is open true mouseLeave");
        //tlXToRightArrow.invalidate().restart();
        linesToLine.reverse();
}
});
