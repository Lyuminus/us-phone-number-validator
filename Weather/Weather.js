let body_fon = `
    <div id="body">
        <div id="input-fon">
            <div id="InputAndSearch"> 
                <input id="input" type="text" autocomplete="off">
                <button id="search" onclick="search()">search</button>
            </div>
            <div id="fonchik">
                <p id="Feelslike"></p>
                <p id="Humidity"></p>
                <p id="Pressure_In"></p>
                <p id="Wind_Dir"></p>
                <p id="Wind"></p>
                <p id="text"></p>
                <p id="Day"></p>
                <p id="Temp"></p>
                <p id="Last_Updated"></p>
                <p id="Localtime"></p>
                <p id="Country"></p>
                <p id="Region"></p>
                <p id="Name"></p>
                <img src="" id="Icon" alt="">
            </div>
        </div> 
    </div>  
`;
document.getElementById("fon-body").innerHTML += body_fon;
async function search() {
    let city = document.getElementById("input").value;
    let baseUrl = 'http://api.weatherapi.com/v1/current.json?key=cd3972bb11ff450fac8120003242108&q=' + city +'&aqi=no';
    console.log(city);
    console.log(baseUrl);
    let Name = "";
    let Region = "";
    let Country = "";
    let Localtime = "";
    let Last_Updated = "";
    let Temp = "";
    let Day = "";
    let text = "";
    let Icon = "";
    let Wind = "";
    let Wind_Dir = "";
    let Pressure_In = "";
    let Humidity = "";
    let Feelslike = "";
    await fetch(baseUrl).then((response) => response.json()).then((data) => {
        Name = data.location.name;
        Region = data.location.region;
        Country = data.location.country;
        Localtime = data.location.localtime;
        Last_Updated = data.current.last_updated;
        Temp = data.current.temp_c;
        Day = data.current.is_day;
        text = data.current.condition.text;
        Icon = data.current.condition.icon;
        Wind = data.current.wind_kph;
        Wind_Dir = data.current.wind_dir;
        Pressure_In = data.current.pressure_in;
        Humidity = data.current.humidity;
        Feelslike = data.current.feelslike_c;
        ;
    });
    document.getElementById("Icon").setAttribute('src', Icon);
    document.getElementById("Name").innerText = Name;
    document.getElementById("Region").innerText = Region;
    document.getElementById("Country").innerText = Country;
    document.getElementById("Localtime").innerText = Localtime;
    document.getElementById("Last_Updated").innerText = Last_Updated;
    document.getElementById("Temp").innerText = Temp;
    document.getElementById("Day").innerText = Day;
    document.getElementById("text").innerText = text;
    document.getElementById("Icon").innerText = Icon;
    document.getElementById("Wind").innerText = Wind;
    document.getElementById("Wind_Dir").innerText = Wind_Dir;
    document.getElementById("Pressure_In").innerText = Pressure_In;
    document.getElementById("Humidity").innerText = Humidity;
    document.getElementById("Feelslike").innerText = Feelslike;
}
