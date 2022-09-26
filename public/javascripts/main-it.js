$('.education-row').click((e) => {
    var el = e.currentTarget;
    var intro = el.querySelector('.edu-intro');
    var caption = el.querySelector('.caption');
    intro.classList.toggle('active');
    $(caption).slideToggle();
});

$('.thumbnail').mouseover(function () {
    $(this).find('.portfolio-text').slideDown('slow');
});
$('.thumbnail').mouseleave(function () {
    $(this).find('.portfolio-text').slideUp('slow');
});