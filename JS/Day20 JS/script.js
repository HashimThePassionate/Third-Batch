// let shopping = ['Milk','Cheese',true,25,90.75]
// console.log(shopping);
// console.log(shopping[2]);
// shopping[2] = "Shaukat"
// console.log(shopping);
// const random = ["tree", 795, [0, 1]];
// console.log(random[2].length);
// // random[2] = 'Tree'
// console.log(random);

// const birds = ["Parrot", "Falcon", "Owl"];
// // console.log(birds.indexOf("Owl")); //  2
// // console.log(birds.indexOf("Rabbit"))
// console.log(birds);
// console.log(birds.length);
// birds.push('Sparrow','Eagle')
// console.log(birds);
// console.log(birds.length);
// birds.unshift(1,'Flamingo')
// console.log(birds); 
// let remove = birds.pop()
// console.log(remove);
// let remove1 = birds.shift()
// console.log(remove1);
// console.log(birds); 

// let f = birds.indexOf('Falcon')
// if (f !== -1) {
//     birds.splice(f,1)
// }
// console.log(birds); 


// const data = "Manchester.London.Liverpool.Birmingham.Leeds.Carlisle"
// ;
// let date = '12AM-Friday-March-2024'
// console.log(data);
// const cities = data.split(".");
// const again = cities.join("-");
// const newdate = date.split("-");
// console.log(cities);
// console.log(cities[3]);
// console.log(newdate);
// console.log(`${again}`);
// console.log(typeof(newdate));
// let newstr = newdate.toString()
// console.log(typeof(newstr));
// console.log(newstr);


// let arr = []
// arr.push('A','B','C')
// console.log(arr);
// arr[8] = 'F'
// console.log(arr);
// arr[3] = 'D'
// console.log(arr);
// arr[4] = [1,2,3,4,5,6]
// console.log(arr);
// console.log(arr[5]);

// console.log(arr.length);
// arr.length = 1
// console.log(arr);
// let arr1 = []
// console.log(arr1[1]);


let array = ['Hashim','Shaukat','Asif','Umair','Salman']
console.log(array);
let array1 = [1,2,3,4,5,6]
array.forEach(
(item, index) => 
console.log(item,index)
)
array1.forEach(
(item, index) => 
console.log(item,index)
)