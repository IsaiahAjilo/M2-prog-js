function ax2bcWiskunde1(u,h,l){


  let logY = Math.log(l) + h + Math.pow(u,2)
  return logY
  }

let logY1 = ax2bcWiskunde1(9,8,15)
console.log(logY1)

function ax2bcWiskunde(x,a,b,c){


let y = (a*(x*x) )+ (b*x) +c;

return y
}

let y1 = ax2bcWiskunde(9,3,4,89)
console.log(y1)
let y2 = ax2bcWiskunde(3,6,5,45)
console.log(y2)
let y3 = ax2bcWiskunde(7,1,2,13)
console.log(y3)


class App
{
    runApplication()
    {
      console.log("hello world") 
      
    }


     newClassFunction()
    {
      console.log("hello world in newclassfunction")
    } 
    

    anotherFunctionWithArguments(aArgument)
    { 
     console.log("kom maar met je argument")
     console.log("hier:")
     console.log(aArgument)
    }
    
    MARIO() 
    {
        console.log("MARIO!!")
    }

    BWAHAHA()
    {
        let log = console.log("BWAHAHA!!!")
        return log;
    }

    plus()
    {
        let a = 3
        let b = 9
        let final = a + b;
        return final
    }
}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
app.MARIO()
app.BWAHAHA()
console.log(app.plus())