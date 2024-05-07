function kereses(){
    let bemenet = document.getElementById("input_box").value;
    fetch(`https://api.nevnapok.eu/nev/${bemenet}`).then(x => x.json()).then(x => megjelenit(x,"kimenet"))
}
function kereses_datum(){
    let bemenet = document.getElementById("input_box_2").value;
    fetch(`https://api.nevnapok.eu/nap/${bemenet}`).then(x => x.json()).then(x => megjelenit(x,"kimenet_2"))
}
function megjelenit(adatok,ki){
    let kimenet = "";
    if(Object.values(adatok)[0] == undefined) {kimenet = "<li>Nem található ilyen adat.</li>"}
    else{
        for (const datum of Object.values(adatok)[0]) {
            console.log(datum);
            kimenet += `<li>${datum}</li>`
        }
    }
    document.getElementById(ki).innerHTML = kimenet;
}