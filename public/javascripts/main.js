$('#education .education-row').click((e) => {
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

let slideN = 1;

$('#load-more').click(function () {
    slideN++;
    $('.more-content').slideToggle('slow');
    if (slideN % 2 === 0) {
        $(this).text('Show Less');
    } else {
        $(this).text('Load More');
    }
});