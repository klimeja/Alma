/**
 * Created by klimic on 28.6.15.
 */
$(window).scroll(function() {
    if ($(window).scrollTop() > 399) {
        document.getElementById('arrow').style.display = "block";
    }
    else {
        document.getElementById('arrow').style.display = "none";
    }
});
