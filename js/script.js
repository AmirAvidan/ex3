var count = 0;

(function init() {
    var articles = "";
    for(i =0; i< 10; i++)
    {
        articles += "<article></article>";
    }
    
    var main = document.getElementsByTagName("main")[0];
    main.innerHTML = articles;
    firstChangeColor();
    firstWhiteCall();
    firstRectangle();
    addRectangle();
})()


function chooseColor(article) {
    count++;
    var colors = ["#A52A2A","#7FFFD4","#DEB887"];
    var randomNumber = Math.floor(Math.random() * 3);
    article.style.backgroundColor = colors[randomNumber];
    article.curColor = article.style.backgroundColor;
    if(count % 3 == 0 && count != 0)
    {
        article.style.backgroundImage = "url('images/star.png')";
        article.starPic = 1;
    }
}


function firstChangeColor() {
    var articles = document.getElementsByTagName("article");
    for(i =0; i < 10;i++)
    {
        chooseColor(articles[i]);
    }
}

function makeWhite(article) {
    article.addEventListener('click',function() {
        if(article.style.backgroundColor != "white")
        {
            article.style.backgroundColor = "white";
            article.style.backgroundImage = "url('images/kasta.jpg')";

        }
        else
        {
            article.style.backgroundColor = article.curColor;
            article.style.backgroundImage = "none";
            if(article.starPic == 1)
            {
                article.style.backgroundImage = "url('../images/star.png')";
            }
        }
    })
}



function firstWhiteCall() {
    var articles = document.getElementsByTagName("article");
    for(i =1; i < 10;i++)
    {
        makeWhite(articles[i]);
    }
}


function firstRectangle() {
    var rectangle = document.createElement("section");
    var articles = document.getElementsByTagName("article");
    articles[0].appendChild(rectangle);
}

function addRectangle() {
    var rectangle = document.getElementsByTagName("section")[0];
    var articles = document.getElementsByTagName("article");
    rectangle.addEventListener('click',function() {
        var main = document.getElementsByTagName("main")[0];
        main.append(document.createElement("article"));
        chooseColor(articles[articles.length-1]);
        makeWhite(articles[articles.length-1]);
    })
}
