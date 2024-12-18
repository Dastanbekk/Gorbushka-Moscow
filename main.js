// class Transport {
//     constructor(name,speed,capacity){
//         this.name = name,
//         this.speed = speed,
//         this.capacity = capacity
//     }
//     getDetails(){
//         return `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}`
//     }
//     start(value){
//         return value === true ? `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}. Transport vositasi harakatga tushdi` :`Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}. Transport vositasi to‘xtadi` 
//     }
// }
// // const transport1 = new Transport('Avtobus',120,52)
// // const trasnportStart = transport1.start(false)
// // console.log(trasnportStart);

// class Car extends Transport {
//     constructor(name,speed,capacity,fuelType){
//         super(name,speed,capacity);
//         this.fuelType = fuelType;
//     }


//     getDetails1(){
//         return `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}, yoqilgi turi:${this.fuelType}`
//     }
// }

// // const car1 = new Car('Avtobus',120,52,'benzin')
// // console.log(car1.getDetails1());


// class Airplane extends Transport{
//     constructor(name,speed,capacity,altitude){
//         super(name,speed,capacity);
//         this.altitude = altitude;
//     }


//     getDetails2(){
//         return `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}, Maksimal Balandiligi:${this.altitude}km`
//     }
//     fly(value){
//         return value === true ? `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}. Samolyot parvozga tushdi` :`Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}, maksimal balandligi:${this.altitude}. Samolyot parvozni boshlamadi`
//     }
// }

// // const samalyot1 = new Airplane('Samalyot S7',420,150,30)
// // const samalyot2 = samalyot1.fly(false)
// // console.log(samalyot2);

// class Ship extends Transport{
//     constructor(name,speed,capacity,cargoCapacity){
//         super(name,speed,capacity);
//         this.cargoCapacity = cargoCapacity;
//     }


//     getDetails2(){
//         return `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}, Yuk tashish sig‘imi:${this.cargoCapacity}tonna`
//     }
//     sail(value){
//         return value === true ? `Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}. Kema suzishni boshladi` :`Transport nomi:${this.name}, tezligi:${this.speed}, odam sig'gimi:${this.capacity}, Yuk tashish sig‘imi:${this.cargoCapacity}tonna. Kema suzishni boshlamadi`
//     }
// }
// const kema1 = new Ship('Samalyot S7',420,150,50)
// const kema2 = kema1.sail(true)
// console.log(kema2);

// let element = document.getElementById("company")
// element.addEventListener("click",function(){
//     element.style.color = "red"
// })

let btns = document.getElementById("btns");
let childs =  btns.children
console.log(childs);


Array.from(childs).forEach((value)=>{
    value.addEventListener("click", ()=>{
        value.style.color = "gray"
        value.style.border = "2px solid gray"
    })
})


