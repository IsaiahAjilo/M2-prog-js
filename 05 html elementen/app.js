class App
{
    runApplication()
    {
      let arr = ["tyler the creator", "MF DOOM", "kanye west"];
      arr.push("bob dylan", "prince")
      console.log(arr);

      let indexToRemove = arr.indexOf("bob dylan");
      arr.splice(indexToRemove, 1);

      indexToRemove = arr.indexOf("prince");
      arr.splice(indexToRemove, 1);
      console.log(arr)

      arr.push("drake", "micheal jackson")
      console.log(arr)
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

      
        let headersByClass = document.getElementsByClassName("Name");
        
        for (let i = 0; i < headersByClass.length; i++) {
            headersByClass[i].innerText = "huh?"
        }
      console.log(headersByClass)

      let mijnH1 = document.getElementById("headerId")
console.log(mijnH1.innerText)

headersByClass[0].innerText = "nieuws";
headersByClass[1].innerText = "reviews";
headersByClass[2].innerText = "commentaar";
headersByClass[3].innerText = "beste forum posts";
headersByClass[4].innerText = "pricewatch";


      
    }
    
}

let app = new App();
app.runApplication();