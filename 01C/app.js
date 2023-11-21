class App
{
    runApplication()
    {
        this.greeting = "starting up"
        this.Appnaam = "tyrone"
        this.versienummer = 1.0
        this.versiedatum = "21/11/2023"
        this.autheur = "isaiah ajilo"
        this.copyright = "idk"
        this.distributeur = "niemand"
        this.darkmode = true
        this.eenboolean = false
        this.eenstring = "elloo"
        this.eennumber = 12345
        let updates = 0
        let appsound = false
        let nickname = "tyr"
        console.log(updates)
        console.log(appsound)
        console.log(nickname)
    }
}

let app = new App();
app.runApplication();

        console.log(app.greeting);
        console.log("Appnaam " + app.Appnaam);
        console.log("versienummer " + app.versienummer);
        console.log("versiedatum " + app.versiedatum);
        console.log("authuer " + app.autheur);
        console.log("copyright " + app.copyright);
        console.log("distributeur " + app.distributeur);
        console.log("darkmode " + app.darkmode);
        console.log("eenboolean " + app.eenboolean);
        console.log("eenstring " + app.eenstring);
        console.log("eennumber " + app.eennumber);
