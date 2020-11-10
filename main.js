var video1 = document.getElementById('video1');
var video3 = document.getElementById('video3');


video.onended = function () {
    video3.play();
    video1.style.opacity=0;
    video3.style.opacity=0;
}
video.onended = function () {
    video3.play();
    video3.style.opacity=0;
    video1.style.opacity=0;
}