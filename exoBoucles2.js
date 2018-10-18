var div = document.getElementById('div');

for (index = 1; index <= 20; index = index+1)
{
    var n = Math.random()*100;
    var x = Math.round(n);


    if (x < 50)
    {
        div.innerHTML = index + " Le capitaine est jeune";
    }
    else if (x > 50)
    {
        div.innerHTML = index + " Le capitaine est âgé";
    }
    else
    {
        div.innerHTML = index + " Joyeux anniversaire";
    }

}