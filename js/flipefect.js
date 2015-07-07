/**
 * Created by klimic on 26.6.15.
 */
function flipefect(id) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    e = document.getElementById(id);
    cr = document.getElementById('red-content');
    cb = document.getElementById('black-content');
    cw = document.getElementById('white-content');
    $('html, body').animate({
        scrollTop: $("#service-wrapper").offset().top
    }, 200);
    if (width > 1024) {
        if (id == 'red'){
            a = document.getElementById('white');
            b = document.getElementById('black');
            cr.style.display = 'block';
            cr.style.transition = "all 1s";
            cr.style.backgroundColor = '#aa0000';
            cr.style.color = '#fff';
            cb.style.display = 'none';
            cw.style.display = 'none';
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
            a.style.marginTop = '0px';
            b.style.marginTop = '0px';
        }
        if (id == 'white'){
            a = document.getElementById('red');
            b = document.getElementById('black');
            cw.style.transition = "all 1s";
            cw.style.display = 'block';
            cr.style.display = 'none';
            cb.style.display = 'none';
            cw.style.backgroundColor = '#aaa';
            cw.style.color = '#aa0000';
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
            a.style.marginTop = '0px';
            b.style.marginTop = '0px';
        }
        if (id == 'black'){
            a = document.getElementById('red');
            b = document.getElementById('white');
            c = document.getElementById('black-content');
            cb.style.transition = "all 1s";
            cb.style.display = 'block';
            cb.style.backgroundColor = '#000';
            cb.style.color = '#fff';
            cr.style.display = 'none';
            cw.style.display = 'none';
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
            a.style.marginTop = '0px';
            b.style.marginTop = '0px';
        }
    }
    else{
        if (id == 'red')
        {
            e.innerHTML = "<p>Provádíme stavby nejkratším možném termínu a nejvyšší možné kvalitě, máme jen spokojené zákazníky, kteří o nás hezky mluví.</p>" +
            "<h2>REFERENCE</h2>";
;
        }
        if (id == 'white')
        {
            e.innerHTML = "<p>Nelíbí se Vám jak vypadá Váš dům, chtěli byste na něm něco změnit? Provedeme Vám jakékoliv stavební změny.</p>"+
            "<h2>REFERENCE</h2>";
        }
        if (id == 'black')
        {
            e.innerHTML = "<p> Odstaňujeme stavby velmi rychle a  šetrně, s námi se nemusíte ničeho bát </p>"+
            "<h2>REFERENCE</h2>";
        }
    }
}
