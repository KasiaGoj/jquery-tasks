$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open');
    });

/* owołanie do odnośników a w main-menu-item */
    $('.main-menu-item a').click(function(e){
        e.preventDefault();
/* fadeOut powoduje zmianę opacity elementu, chcemy, zeby całe body "zniknęło" */
        $('body').fadeOut(2000, function(){
/* standardowo tak mozna dodać linka: */
            // window.location.href = 'https://www.gazeta.pl/0,0.html';
            window.location.href = $(e.target).attr('href');
            /* attr('href') zwraca wartość atrybut klikniętego obiektu, w naszym przypadku klikniętego odnośnika */

        });
    });
});