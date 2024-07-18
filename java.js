//    java1
//   let cem=0,hasil=1  
//  for(let i=9;i<10;i++){
//  cem+=i      hasil*=i}
//  console.log(cem,"cem");
//  console.log(hasil);


//   java2
//   let a = 0
//   for(let hasil=0; hasil<100; hasil++){
//   if(hasil%2==0){
//   a+=hasil
//   }
//   }
//   console.log(a)

//    java3
//   let b = 0
//   let a =0 
//   for(eded=100; eded<=999; eded++){
//   if(eded>=100 && eded<=999){
//   a+=eded
//   b++
//   }
//   }
//   c =a/b
//   console.log(c)



// java4
// let a = 0
// for(i=100; i<=999; i++){
//     if(i%7==0 && i%8==0){
//         a+=i
       
//     }
// }
// console.log(a)


// java5
// let a = 0

// for(i=100; i<=999; i++){
//     if(i%7==0 && i%8==0){
//         a+=i
//         break
//     }
// }
// console.log(a)

// misya6
// let a = 0
// for (i=999; i=>100; i--){
//     if(i%7==0 && i%8==0){
//         a=i
//         break
//     }
// }
// console.log(a)



// misya7
// let a = 10
// let b = 20
// let c = 8
// const d = Math.min(a,b,c)
// console.log(d)


// let num_1 = +prompt("burdaki ededler tekdir: ")

// if(num_1%2==0){
//     console.log("burdaki ededler  cutdur")
//   }
// else{
//     console.log("burdaki ededler tekdir")
// }


//     let num_1 = +prompt("eded elave edin 1: ")
//     let num_2 = +prompt("eded elave edin 2: ")
//     let operatorlar = prompt("+,-,*,/")


//     switch(operatorlar){
//     case "+":
//     r=num_1+num_2
//     console.log(r)
//     break
    
//     case "-":
//     r=num_1-num_2
//     console.log(r)
//     break

//     case "/":
//     r = num_1/num_2
//     console.log(r)
//     break

//     case "*":
//     r= num_1*num_2
//     console.log(r)

//     }


//     let number = +prompt("Eded daxil edin")

//     for(i=0; i<number; i++){
//     if(number<100){
//     console.log("Eded 100 den boyuk olmalidir")
//     }
//     if(i>100 && i<=999){
//     if(number%i==0){
//     console.log(i)
//     }
//     }
//     }


//     let number = +prompt("Eded daxil edin")

//     let liste = [];
//     for(let i=0; i<number; i++){
//     if(number%i==0){
//     liste.push(i)
//     }
//     }
//     console.log(liste)



//     for(i=1; i<=11;i++){
//     for(let e=i+1;e<=12;e++){
//     if(i+e==12)
//     console.log(${i}+${e}=12)
//     }
//     }



//     let x = 5;
//     let y = 6;

//     console.log("Əvəzinə dəyişmədən əvvəl:");
//     console.log("x =", x);
//     console.log("y =", y);

//     let temp = x;
//     x = y;
//     y = temp;

//     console.log("Dəyişdikdən sonra:");
//     console.log("x =", x);
//     console.log("y =", y);



//     let a = +prompt("eded elave edin")

//     if(a%1==0){
//     console.log("eded tamdir")
//     }
//     else{
//     console.log("eded tam deyil")
//     }


//      let number = 20

//     let q1 = Math.pow(number, 5);
//     let q2 = number % 3;

//     console.log( q1);
//     console.log( q2);
//     let temperatur = +prompt("Derece ")
//     if(temperatur<0){
//     console.log("Cox soyuq")
//     }
//     else if(temperatur<=15){
//     console.log("soyuq")
//     }
//     else if(temperatur<=30){
//     console.log("isti")
//     }
//     else if(temperatur<=50){
//     console.log("Cox isti")
//     }
//     else{
//     alert("yanlis tempurator")
//     }


//     let gunler = +prompt("Gun  ")

//     switch(gunler){
//     case 1:
//     console.log("Bazar ertesi")
//     break
    
//     case 2:
//     console.log("çərşənbə axşamı")
//     break

//     case 3:
//     console.log("çərşənbə")
//     break

//     case 4:
//     console.log("cümə axşamı")
//     break

//     case 5:
//     console.log("cümə")
//     break

//     case 6:
//     console.log("şənbə")
//     break

//     case 7:
//     console.log("Bazar")

//     }


//     switch (gunler) {
//     case 12:
//     case 1:
//     case 2:
//     console.log("Qış");
//     break;

//     case 3:
//     case 4:
//     case 5:
//     console.log("Yaz");
//     break;

//     case 6:
//     case 7:
//     case 8:
//     console.log("Yay");
//     break;

//     case 9:
//     case 10:
//     case 11:
//     console.log("Payız");
//     break;

//    default:
//    console.log("");
//    }