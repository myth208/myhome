let tween = gsap.to(".box1",{
    duration:8,
    x:400,
    paused:true,
});

document.querySelector("#play").onclick = function(){
    return tween.play();
};
document.querySelector("#pause").onclick = function(){
    return tween.pause();
};
document.querySelector("#resume").onclick = function(){
    return tween.resume();
};
document.querySelector("#reverse").onclick = function(){
    return tween.reverse();
};
document.querySelector("#restart").onclick = function(){
    return tween.restart();
};
