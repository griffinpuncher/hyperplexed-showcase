document.addEventListener("DOMContentLoaded",function() {
    const track = document.querySelector(".img-container");
    const images = document.querySelectorAll("img");
    let startClick = null;
    let scrollDistance = 0;
    
    images.forEach(image => {
        image.addEventListener("dragstart", event => {
            event.preventDefault();
        });
    });
    
    window.addEventListener("mousedown",event => startClick = event.clientX);
    window.addEventListener("mouseup", () => startClick = null);
    window.addEventListener("mousemove",event => {
        if(!startClick) return;
        const maxMove = window.innerWidth/2;
        const scroll = ((startClick - event.clientX)/maxMove)*-100;
        startClick = event.clientX;
        scrollDistance = Math.max(Math.min(scrollDistance + scroll, 0), -100);
        track.animate({
            transform: `translate(${scrollDistance}%, 0%)`
        },{duration: 1200, fill: "forwards"});
        images.forEach(image => {
            image.animate({
                objectPosition: `${scrollDistance + 100}% 50%`
            },{duration: 1200, fill: "forwards"})
        });
    });
});