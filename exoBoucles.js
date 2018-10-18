for (index = 1; index <= 20; index = index+1)
{
    n = Math.random()*100;
    var x = Math.round(n);


if (x < 50)
    {
        document.write(index + " Le capitaine est jeune <br>");
    }
else if (x > 50)
    {
        document.write(index + " Le capitaine est âgé <br>");
    }
else
    {
        document.write(index + " Joyeux anniversaire <br>");
    }

}