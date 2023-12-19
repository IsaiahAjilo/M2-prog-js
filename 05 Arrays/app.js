class App
{
    runApplication()
    {
      let arr = ["tyler the creator", "MF DOOM", "kanye west"];
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        const element = i + ": " + arr[i]
        console.log(element);
      }
      let nummers = [2, 5, 7]
      console.log(nummers)  
      for (let b = 0; b < nummers.length; b++) {
        const element1 = nummers[b] + 1;
        console.log(element1);
      }
        
      
    }
    
}

let app = new App();
app.runApplication();