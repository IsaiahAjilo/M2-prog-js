class App
{
    runApplicaion()
    {
        let Canvas = document.getElementById("CanvasId")
        let g = Canvas.getContext("2d");
        g.beginPath();
        g.fillstyle = "yellow";
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40)
        g.lineTo(70,20)
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60)
        g.lineTo(60,40)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillstyle = "brown";
        g.moveTo(80,30);
        g.lineTo(60,40);
        g.lineTo(60,60)
        g.lineTo(80,50)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30)
        g.closePath();
        g.stroke();
        g.fill()

       
        
        let random1 = Math.random();
        console.log(random1)
        if (random1 < 0.5)
        {
            g.beginPath();
            g.fillStyle = "yellow";
            g.moveTo(35,50);
            g.lineTo(40,50);
            g.lineTo(40,40)
            g.lineTo(35,40)
            g.closePath();
            g.stroke();
            g.fill()
        }
        else if (random1 > 0.5)
        {
            g.beginPath();
            g.fillStyle = "black";
            g.moveTo(35,50);
            g.lineTo(40,50);
            g.lineTo(40,40)
            g.lineTo(35,40)
            g.closePath();
            g.stroke();
            g.fill()
        }




        console.log(Canvas)
        console.log("hello world!")
        //code
    }


}
let app = new App();
app.runApplicaion();