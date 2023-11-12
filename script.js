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

// Example usage with an event listener
document.getElementById("top_10-next").addEventListener('click', function() {
    move_slider_right(this.id);
});
document.getElementById("latest-next").addEventListener('click', function() {
    move_slider_right(this.id);
});
document.getElementById("top_10-back").addEventListener('click', function() {
    move_slider_left(this.id);
});
document.getElementById("latest-back").addEventListener('click', function() {
    move_slider_left(this.id);
});
