// Add an event listener to the `document` object to listen
// for the "scroll" event.

//select element
const audrey = document.getElementById("audrey");

//adjust width and height
document.addEventListener("scroll", () => {
const widthValue = (0.33 * window.scrollY) * 10; 
    if (widthValue <= 50) {
        audrey.style.width = "50px"
    } else {
        audrey.style.width = widthValue + "px";
    }
const heightValue = (0.25 * window.scrollY) * 10; 
    if (heightValue <= 100) {
        audrey.style.height = "100px"
    } else {
        audrey.style.height = heightValue + "px";
    }
})
