function Generate(){
    var random = Math.random()*10;
    random = Math.floor(random)+1;

    if (random == 1)
    {document.querySelector(".motor").style.background = "coral";}
    else if (random ==2){document.querySelector(".motor").style.background = "blue";}
    else if (random ==3){document.querySelector(".motor").style.background = "grey";}
    else if (random ==4){document.querySelector(".motor").style.background = "green";}
    else if (random ==5){document.querySelector(".motor").style.background = "yellow";}
    else if (random ==6){document.querySelector(".motor").style.background = "light blue";}
    else if (random ==7){document.querySelector(".motor").style.background = "black";}
    else if (random ==8){document.querySelector(".motor").style.background = "purple";}
    else if (random ==9){document.querySelector(".motor").style.background = "lawngreen";}

    {document.querySelector(".motor").style.background = "pitch";}
}


function Show()
{
    if (document.querySelector("#color").value == "blue")
    {
        document.querySelector(".motor").style.background = "Blue";
    }
    else if(document.querySelector("#color").value == "grey")
    {
        document.querySelector(".motor").style.background = "Grey";
    }
    else if(document.querySelector("#color").value =="green")
    {
        document.querySelector(".motor").style.background = "Green";
    }
    else if(document.querySelector("#color").value == "yellow")
    {
        document.querySelector(".motor").style.background = "Yellow";
    }
    else if(document.querySelector("#color").value == "lightblue")
    {
        document.querySelector(".motor").style.background = "Lightblue";
    }
    else if(document.querySelector("#color").value == "black")
    {
        document.querySelector(".motor").style.background = "Black";
    }
    else if(document.querySelector("#color").value == "purple")
    {
        document.querySelector(".motor").style.background = "Purple";
    }
    else if(document.querySelector("#color").value == "lawngreen")
    {
        document.querySelector(".motor").style.background = "Lawngreen";
    }

}
function Reset()
{
    document.querySelector(".motor").style.background = "white";
}
