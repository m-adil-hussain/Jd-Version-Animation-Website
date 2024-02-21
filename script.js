const tl = gsap.timeline();
const moveDiv = document.querySelector(".circle");
const btn = document.querySelector("#btn");

window.addEventListener("mousemove", function (params) {
    this.setTimeout(function () {
        moveDiv.style.top = params.y + "px";
        moveDiv.style.left = params.x + "px";
    },100);
});

btn.addEventListener("click", function () {
    tl.reverse();
})

tl.from(".page-1 .text-img",{
    duration: 1.5,
    opacity: 0,
    scale: 0
})
tl.from(".page-1 .right",{
    duration: 1.5,
    opacity: 0,
    width: 0
})
tl.from(".page-1 .black",{
    duration: 1.5,
    opacity: 0,
    scale: 0.5
})
tl.from(".page-1 .black p",{
    duration: 1.5,
    opacity: 0,
    y: 30
})
tl.from(".page-1 .right .text .line",{
    duration: 1.5,
    opacity: 0,
    width: 0
})
tl.from(".page-1 h3",{
    duration: 1.5,
    opacity: 0,
    x: -100
})