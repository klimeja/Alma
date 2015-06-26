/**
 * Created by klimic on 26.6.15.
 */
function flipefect(id) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    c = document.getElementById('content');
    e = document.getElementById(id);
    if (width > 1024) {
        if (id == 'red'){
            document.getElementById('service-wrapper').style.height = "800px";
            a = document.getElementById('white');
            b = document.getElementById('black');
            c.style.transition = "all 1s";
            c.style.display = 'block';
            c.style.backgroundColor = '#aa0000';
            c.style.color = '#fff';
            c.innerHTML = "<p>Provádíme stavby nejkratším možném termínu a nejvyšší možné kvalitě, máme jen spokojené zákazníky, kteří o nás hezky mluví.</p>" +
            "<h2>REFERENCE</h2>";
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
        }
        if (id == 'white'){
            document.getElementById('service-wrapper').style.height = "800px";
            a = document.getElementById('red');
            b = document.getElementById('black');
            c.style.transition = "all 1s";
            c.style.display = 'block';
            c.style.backgroundColor = '#fff';
            c.style.color = '#aa0000';
            c.innerHTML = "<p>Nelíbí se Vám jak vypadá Váš dům, chtěli byste na něm něco změnit? Provedeme Vám jakékoliv stavební změny.</p>"+
            "<h2>REFERENCE</h2>";
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
        }
        if (id == 'black'){
            document.getElementById('service-wrapper').style.height = "800px";
            a = document.getElementById('red');
            b = document.getElementById('white');
            c.style.transition = "all 1s";
            c.style.display = 'block';
            c.style.backgroundColor = '#000';
            c.style.color = '#fff';
            c.innerHTML = "<p> Odstaňujeme stavby velmi rychle a  šetrně, s námi se nemusíte ničeho bát </p>"+
            "<h2>REFERENCE</h2>";
            e.style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'block';
            a.style.width = '50%';
            b.style.width = '50%';
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
            e.innerHTML = "<p>Nelíbí se Vám jak vypadá Váš dům, chtěli byste na něm něco změnit? Provedeme Vám jakékoliv stavební změny.</p>";

        }
        if (id == 'black')
        {
            e.innerHTML = "<p> Odstaňujeme stavby velmi rychle a  šetrně, s námi se nemusíte ničeho bát </p>";

        }
    }
}
