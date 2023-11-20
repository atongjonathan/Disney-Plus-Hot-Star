document.addEventListener("DOMContentLoaded", function (){              
    document.querySelectorAll(".button-back").forEach(function(button)
    {
        button.onclick = function(){
            button_slider = button.dataset.slider
            document.querySelectorAll('.slider').forEach(function(slider){
                if (slider.id === button_slider){
                    let slider_width = slider.offsetWidth;
                    if (slider_width > 1231) {
                            slider.style.marginLeft = `0px`;
                        }
                }
            });
            
        };
        
    });
    document.querySelectorAll(".button-next").forEach(function(button)
        {
            button.onclick = function(){
                button_slider = button.dataset.slider
                document.querySelectorAll('.slider').forEach(function(slider){
                    if (slider.id === button_slider){
                        let slider_width = slider.offsetWidth;
                        if (slider_width > 1231) {
                                let excess = slider_width - 1231;
                                slider.style.marginLeft = `-${excess}px`;
                            }
                    }
                });
                
            };
            
        });
});


