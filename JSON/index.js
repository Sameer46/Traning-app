import Car from "./Car.json" assert{type:'json'};
console.log(Car);
import Track from "./Track.json" assert{type:'json'};
console.log(Track.Track.length);
let trackList=[];
let CarsList=[];
//tranfor into array
for(let i=0;i<Track.Track.length;i++){
    trackList[i]=Track.Track[i];

}
for(let j=0;j<Car.Cars.length;j++){
    CarsList[j]=Car.Cars[j];
}
var tracklength=trackList.length;
var carslength=CarsList.length;
console.log(tracklength);
document.addEventListener("click", generate);
function generate(){
    var randomNumberTrack=Math.floor(Math.random() * tracklength);
    var randomNumberCar=Math.floor(Math.random() *carslength);
    for(let i=0;i<3;i++){
        randomNumberTrack=Math.floor(Math.random() * tracklength);
        randomNumberCar=Math.floor(Math.random() *carslength);
        console.log(randomNumberCar);
    }
    console.log(CarsList[randomNumberCar].Sim);
    console.log(trackList[randomNumberTrack].Sim);
    if(CarsList[randomNumberCar].Sim==trackList[randomNumberTrack].Sim){
        if(trackList[randomNumberTrack].Car=='B'){
            //we can race any car so it fine 
            // we will change img in all the three box
            document.getElementById('track').innerHTML=trackList[randomNumberTrack].Name;
            document.getElementById('Car').innerHTML=CarsList[randomNumberCar].Car;
            document.getElementById("img").src=`img/Game/${CarsList[randomNumberCar].Sim}.jpg`;
            console.log(CarsList[randomNumberCar].Car);
            console.log(CarsList[randomNumberCar].Sim);
            console.log(CarsList[randomNumberCar].Type);
            console.log(trackList[randomNumberTrack].Name);
            console.log(randomNumberCar);
        }else if(trackList[randomNumberTrack].Car=='S'){
            //only small car can race so we check even the car type
            if(CarsList[randomNumberCar].Type=='S'){
                // we can change the img in the three box 
                document.getElementById('track').innerHTML=trackList[randomNumberTrack].Name;
                document.getElementById('Car').innerHTML=CarsList[randomNumberCar].Car;
                document.getElementById("img").src=`img/Game/${CarsList[randomNumberCar].Sim}.jpg`;
                console.log(CarsList[randomNumberCar].Car);
                console.log(CarsList[randomNumberCar].Sim);
                console.log(CarsList[randomNumberCar].Type);
                console.log(trackList[randomNumberTrack].Name);
                console.log(randomNumberCar);
            }else{
                while(CarsList[randomNumberCar].Type!='S'){
                    var randomNumberCar=Math.floor(Math.random() *carslength);
                    console.log('number changed'+randomNumberCar);
                    generate()
                };
            }
        }

    }else{
        while(trackList[randomNumberTrack].Sim!=CarsList[randomNumberCar].Sim){
            randomNumberTrack=Math.floor(Math.random() * tracklength);
            console.log(randomNumberTrack+"has changed")
        }return generate()
    }

}

