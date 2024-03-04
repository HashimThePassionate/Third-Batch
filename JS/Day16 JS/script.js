var Name = 'Muhammad Hashim'
var age = 24
var percentage = 80.75
var studentofACI = true
var course_fees = 189000
var discount = 0.6
console.log('My Student Information');
console.log('My name is', Name);
console.log('My age is', age);
console.log('My percentage is', percentage);
console.log('i am a student of ACI', studentofACI);


message = `
My Student Information
My name is ${Name}
My age is ${age}
My percentage is ${percentage}
i am a student of ACI ${studentofACI}
My Python Course Fees is ${course_fees}
And Discount is ${course_fees * discount}
`
console.log(message, typeof (message));
console.log(discount);