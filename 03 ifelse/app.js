class App
{
    runApplication()
    {
      console.log("helloworld!");

      let title = document.getElementById("newstitle");
      console.log(title);
      
      let random = Math.random();
      console.log(random);
      if(random < 0.2)
      {
        title.style.backgroundColor = "#FF0000";
      } 
      else if(random > 0.2 && random <= 0.6)
      {
        title.style.backgroundColor = "#FFD700";
     }
     else if(random > 0.6 && random <= 0.75)
     {
        title.style.backgroundColor = "#00FF00";
     }
     else if(random > 0.75) 
     {
        title.style.backgroundColor = "#FF69B4";
     }

     let newsitem1 = document.getElementsByClassName("gamenews")[0]
     console.log(newsitem1)

     let random1 = Math.random();
     console.log(random1)
     if (random1 < 0.5)
     {
        newsitem1.style.backgroundColor = "#F00000";
     }
     else (random1 > 0.5)
     {
        newsitem1.style.backgroundColor = "#00F000";
     }
     let newsitem2 = document.getElementsByClassName("gamenews")[1]
     console.log(newsitem2)

     let random2 = Math.random();
     console.log(random2)
     if (random2 < 0.5)
     {
        newsitem2.style.backgroundColor = "#00FFFF";
     }
     else (random2 > 0.5)
     {
        newsitem2.style.backgroundColor = "#F0FF00";
     }
    }
}

let app = new App();
app.runApplication();