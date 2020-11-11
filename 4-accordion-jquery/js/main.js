$(document).ready(function(){
/* obsługa kliknięcia, czyli zdarzenie, czyli obiekt */
    $('.item').click(function(){
/* sprawdzenie, czy click działa:  */
        //console.log('klik');
/* dodanie klasy open, która pokazuje, ze dany item jest rozwinięty */
       // $(this).addClass('open');

/* jezeli dany item ma klasę 'open' czyli jest rozwinięty, usuwamy klasę i zwijamy item, jezeli nie: dadajemy klasę i rozwijamy element */     


/* sprawdzenie co, zwraca metoda hasClass: */
        // console.log($(this).hasClass('open'));

        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.item-content').slideUp();

        } else {
            $(this).addClass('open');
            $(this).find('.item-content').slideDown();
        }
        


/* rozwinięcie paragrafu z klasą item-content przy uzyciu metody slideDown
przy kazdym kliknięciu rozwijany ma być tylko content klikanego itemu (this) w tym przypadku: */
        // $(this).find('.item-content').slideDown();
    });



});