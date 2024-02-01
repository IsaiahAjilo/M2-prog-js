class App
{
    runApplication()
    {
        let user1 = new User("H4_isaiah")
        let user2 = new User("angelpronl")
        let user3 = new User("charles")
        let user4 = new User("joshmash")
        let user5 = new User("brothajeroen")
        let user6 = new User("amintob")

        user1.wieBenIk();//dit is H4_isaiah
        user2.wieBenIk();//dit is angelpronl
        user3.wieBenIk();//dit is charles
        user4.wieBenIk();//dit is joshmash
        user5.wieBenIk();//dit is brothajeroen
        user6.wieBenIk();//dit is amintob
    }
}

class User
{
    constructor(naam)
    {
        this.name = naam;
    }
    wieBenIk()
    {
        console.log(this.name)
    }
}

let app = new App();
app.runApplication();