document.addEventListener("DOMContentLoaded", function (){   
    function handleButtonClick(button, direction) {
    button.onclick = function () {
        let button_slider = button.dataset.slider;
        let targetSlider = document.querySelector(`.slider#${button_slider}`);
    
        if (targetSlider) {
        let slider_width = targetSlider.offsetWidth;
    
        if (direction === "back" && slider_width > 1231) {
            targetSlider.style.marginLeft = `15px`;
        } else if (slider_width > 1231) {
            let excess = slider_width - 1300;
            targetSlider.style.marginLeft = `-${excess}px`;
        }
    
        console.log(direction);
        }
    };
    }
    
    document.querySelectorAll(".button-back").forEach(function (button) {
    handleButtonClick(button, "back");
    });
    
    document.querySelectorAll(".button-next").forEach(function (button) {
    handleButtonClick(button, "next");
    });
      
});


