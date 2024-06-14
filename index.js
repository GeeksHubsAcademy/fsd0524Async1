// setTimeout(()=>{
//     console.log("hola")
// },2500)

////////////////////////
//EJEMPLOS SETTIMEOUT///
////////////////////////

// setTimeout(() => {
//   console.log("Abraham");

//   setTimeout(() => {
//     console.log("Angie");

//     setTimeout(() => {
//       console.log("Morena");

//       setTimeout(() => {
//         console.log("Yoana");
//       }, 1500);

//       console.log("Santi");
//     }, 200);

//     setTimeout(()=>{
//         console.log("Pepe")
//     }, 750)
//     console.log("David");
//   }, 500);
//   console.log("Mandy");

//   setTimeout(() => {
//     console.log("Guillermo");

//     setTimeout(() => {
//       console.log("Esperanza");
//     }, 1800);
//   }, 150);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   let dia = "Lunes"

//   dia === "Viernes"
//     ? resolve("Biennnnn")
//     : reject("Maaaaal")
// });

// p.then(
//     data => {
//         console.log(data)
//     }
// ).catch(
//     error => console.log(`Uiiiii ${error}`)
// )

// console.log(p)

// const programar = new Promise((resolve, reject) => {
//     const bootcamp = true;

//     bootcamp
//         ? resolve("Estamos aprendiendo a programar")
//         : reject("Vamos a morir")
// })

// programar
//     .then(
//         //espiderman vale lo que vale resolve
//         espiderman => {
//             for(let i = 0; i < 5; i++){
//                 console.log(espiderman)
//             }
//         }
//     )
//     //error vale lo mismo que reject
//     .catch(
//         error => console.log(error)
//     )

//CHAINING THEN

// const promise = new Promise((resuelve, reject) => {
//   resuelve(1);
// });

// promise
//   .then((val) => val + 1)
//   .then((val) => val + 1)
//   .then((val) => console.log(val)); // 3



// const resolveIn = delay => new Promise(resolve => {
//     setTimeout(() => resolve(delay), delay);
// });
    
// const p = Promise.all([resolveIn(500), resolveIn(300), resolveIn(100)])

// p.then(values =>{
//     console.log(values); // [100, 300, 500]
// });



//ASYNC-AWAIT

// CON async await
const getFilm = () => new Promise((res, rej) => res('Matrix'));

const getMain = film => new Promise((res, rej) => {
    film === 'Matrix' ? res('Neo') : rej('404');
});

async function queue() {
    const film = await getFilm("Matrix"); //Supongamos que toca 'Matrix'
    const main = await getMain(film); //Neo
    console.log(main);
}

queue(); //escribirá 'Neo' en la consola.
console.log("pepeeeeeee")
console.log("consuuuuuum")
console.log("napolitanaaaaaaa")