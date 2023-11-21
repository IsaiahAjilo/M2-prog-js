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
