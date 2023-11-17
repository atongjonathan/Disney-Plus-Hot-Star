let content_width = 1231
function move_slider_right(elementId) {
    let section = elementId.split("-")[0];
    let slider_name = `${section}-slider`;
    let slider = document.getElementById(slider_name);
    let slider_width = slider.offsetWidth;

    if (slider_width > content_width) {
        let excess = slider_width - content_width;
        slider.style.marginLeft = `-${excess}px`;
    }
};

function move_slider_left(elementId)
{
    let section = elementId.split("-")[0];
    let slider_name = `${section}-slider`;
    let slider = document.getElementById(slider_name);
    let slider_width = slider.offsetWidth;

    if (slider_width > content_width) {
        slider.style.marginLeft = `0px`;
    }
};
let sliders = ["top_10", "latest", "popular", "sports","superhero", "binge"]
for(let i=0; i<sliders.length; i++)
{
    let next_button = `${sliders[i]}-next`;
    let back_button = `${sliders[i]}-back`;
    
    document.getElementById(next_button).addEventListener("click", function()
    {
        move_slider_right(this.id);
    })
    document.getElementById(back_button).addEventListener("click", function()
    {
        move_slider_left(this.id);
    })
};



