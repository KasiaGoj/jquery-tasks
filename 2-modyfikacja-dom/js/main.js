/* 3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
pierwszą pozycję
4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
pierwszą pozycję
5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne, czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią */

$(document).ready(function() {

$(function() {
	$('#change').click(function() {
        $("p:first").before($("p:last"));
    });
});

const newButton = $('<button id="reverse">Cofnij</button>');
    $('p:last').after(newButton);
});

$(function(){    
    $("#reverse").click(function(){
        $("p:last").after($("p:first"));
    });
});


