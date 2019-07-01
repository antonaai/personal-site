$('#one').click(() => {
    $('#one-caption').slideToggle();
    $('#one-intro').toggleClass('active');
});

$('#two').click(() => {
    $('#two-caption').slideToggle();
    $('#two-intro').toggleClass('active');
});

$('#three').click(() => {
    $('#three-caption').slideToggle();
    $('#three-intro').toggleClass('active');
});
$('#four').click(() => {
    $('#four-caption').slideToggle();
    $('#four-intro').toggleClass('active');
});
$('#five').click(() => {
    $('#five-caption').slideToggle();
    $('#five-intro').toggleClass('active');
});
$('#six').click(() => {
    $('#six-caption').slideToggle();
    $('#six-intro').toggleClass('active');
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
        $(this).text('Mostra meno');
    } else {
        $(this).text('Mostra di più');
    }
});