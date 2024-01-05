var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let count = 0;
slider_counts = [0,0,0,0]
document.addEventListener("DOMContentLoaded", function (){   
    function handleButtonClick(button, direction) {
    button.onclick = function () {
        let button_slider = button.dataset.slider;
        let targetSlider = document.querySelector(`.slider#${button_slider}`);
        if (targetSlider) {
        let slider_width = targetSlider.offsetWidth;
        if ('ontouchstart' in window) {
            if (direction === "back" && slider_width > 1231) {
                targetSlider.style.marginLeft = `15px`;
            } 
            else {
                
                let excess = slider_width - 1231 ;
                let current_margin = parseInt(targetSlider.style.marginLeft, 10)*-1;
                
                if(count > 3){
                    console.log("Excess",counters)
                    
                }
                else if (current_margin > 0 && count <4){
                    targetSlider.style.marginLeft = `-${width-83+current_margin}px`;
                    count = count+1
                    // console.log("Has been clicked", current_margin, count);
                }
                else{
                    console.log(count)
                    targetSlider.style.marginLeft = `-${width-83}px`;
                    count = count+1
                }
                
                
            }
        } else {
            if (direction === "back" && slider_width > 1231) {
                targetSlider.style.marginLeft = `15px`;
            } else {
                
                let excess = slider_width - 1231   ;
                console.log(excess)
                targetSlider.style.marginLeft = `-${excess}px`;
            }
    
        }  
    
        
    
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




