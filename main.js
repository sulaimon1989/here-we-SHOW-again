//Reference is Ben from the group

const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
  456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
let kataList = document.createElement('div')
document.body.append(kataList)

//Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
let kata1 = document.createElement('div')
let kataUnoHeading = document.createElement('h3')
kataUnoHeading.append('kata 1')
kata1.append(kataUnoHeading)
kataList.append(kata1)
for(let index =1; index <= 20; index++){
  if(index === 20){
    kata1.append(index)
  }else{
    kata1.append(index + ',')
  } 
}

// the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)

let kata2 = document.createElement('div')
let katatwoHeading = document.createElement('h3')
katatwoHeading.append('kata 2')
kata2.append(katatwoHeading)
kataList.append(kata2)
for(let index =2; index <= 20; index += 2){
  if(index === 20){
    kata2.append(index)
  }else{
    kata2.append(index + ',')
  } 
}

//Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

let kata3 = document.createElement('div')
let katathreeHeading = document.createElement('h3')
katathreeHeading.append('kata 3')
kata3.append(katathreeHeading)
kataList.append(kata3)
for(let index = 1; index <=20; index+= 2){
  if(index === 19){
    kata3.append(index)
  }else{
    kata3.append(index + ',')
  }
}

//Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

let kata4 = document.createElement('div')
let katafourHeading = document.createElement('h3')
katafourHeading.append('kata 4')
kata3.append(katafourHeading)
kataList.append(kata4)
for(let index = 5; index <= 100; index += 5){
  if(index === 100){
    kata4.append(index)
  }else{
    kata4.append(index + ',')
  }
}

//Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let kata5 = document.createElement('div')
let katafiveHeading = document.createElement('h3')
katafiveHeading.append('kata 5')
kata5.append(katafiveHeading)
kataList.append(kata5)
for(let index = 1; index <= 120    ; index ++){
  const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
  if(indexIsPerfectSquare && index != 120){
    kata5.append(index + ',')
  }
}

//Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)

let kata6 = document.createElement('div')
let katasixHeading = document.createElement('h3')
katasixHeading.append('kata 6')
kata6.append(katasixHeading)
kataList.append(kata6)
for(let index = 20; index >= 1; index--){
  if(index === 1){
    kata6.append(index)
  }else{
    kata6.append(index + ',')
  } 
}

//Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

let kata7 = document.createElement('div')
let katasevenHeading = document.createElement('h3')
katasevenHeading.append('kata 7')
kata7.append(katasevenHeading)
kataList.append(kata7)
for(let index = 20; index >= 2; index -=2){
  if(index === 2){
    kata7.append(index)
  }else{
    kata7.append(index + ',')
  } 
}

//Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)

let kata8 = document.createElement('div')
let kataeightHeading = document.createElement('h3')
kataeightHeading.append('kata 8')
kata8.append(kataeightHeading)
kataList.append(kata8)
for(let index = 19; index >=1; index-= 2){
  if(index === 1){
    kata8.append(index)
  }else{
    kata8.append(index + ',')
  }
}

//Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)

let kata9 = document.createElement('div')
let katanineHeading = document.createElement('h3')
katanineHeading.append('kata 9')
kata9.append(katanineHeading)
kataList.append(kata9)
for(let index = 100; index >= 5; index -= 5){
  if(index === 5){
    kata9.append(index)
  }else{
    kata9.append(index + ',')
  }
}

//Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let kata10 = document.createElement('div')
let katatenHeading = document.createElement('h3')
katatenHeading.append('kata 10')
kata10.append(katatenHeading)
kataList.append(kata10)
for(let index = 100; index >= 1; index --){
  const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
  if(indexIsPerfectSquare && index != 1){
    kata10.append(index + ',')
  }else if(indexIsPerfectSquare){
    kata10.append(index)
  }
}

//Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let kata11 = document.createElement('div')
let kataelevenHeading = document.createElement('h3')
kataelevenHeading.append('kata 11')
kata11.append(kataelevenHeading)
kataList.append(kata11)
for(let index =0; index < sampleArray.length; index ++){
  kata11.append(sampleArray[index] + ' ,')
}

//Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let kata12 = document.createElement('div')
let katatwelveHeading = document.createElement('h3')
katatwelveHeading.append('kata 12')
kata12.append(katatwelveHeading)
kataList.append(kata12)
for(let index = 0; index < sampleArray.length; index ++){
  if(sampleArray[index] % 2 === 0){
    kata12.append(sampleArray[index] + ', ')
  }
}

//Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let kata13 = document.createElement('div')
let katathirteenHeading = document.createElement('h3')
katathirteenHeading.append('kata 13')
kata13.append(katathirteenHeading)
kataList.append(kata13)
for(let index =0; index< sampleArray.length; index++){
  if(sampleArray[index] % 2 != 0){
    kata13.append(sampleArray[index] + ' ,')
  }

}

//Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let kata14 = document.createElement('div')
let katafourteenHeading = document.createElement('h3')
katafourteenHeading.append('kata 14')
kata14.append(katafourteenHeading)
kataList.append(kata14)
for ( let index = 0; index < sampleArray.length; index ++){
  kata14.append((sampleArray[index] * sampleArray[index]) + ',')
}

//Display the sum of all the numbers from 1 to 20.
let kata15 = document.createElement('div')
let katafifteenHeading = document.createElement('h3')
katafifteenHeading.append('kata 15')
kata15.append(katafifteenHeading)
kataList.append(kata15)
let result15 = 0
for(let index = 1; index <= 20; index++){
  result15 += index
}
kata15.append(result15)

//Display the sum of all the elements in sampleArray.
let kata16 = document.createElement('div')
let katasixteenHeading = document.createElement('h3')
katasixteenHeading.append('kata 16')
kata16.append(katasixteenHeading)
kataList.append(kata16)
let result16 = 0
for(let index = 0; index < sampleArray.length; index++){
  result16 += sampleArray[index]
}
kata16.append(result16)

//Display the smallest element in sampleArray.
let kata17 = document.createElement('div')
let kataseventeenHeading = document.createElement('h3')
kataseventeenHeading.append('kata 17')
kata17.append(kataseventeenHeading)
kataList.append(kata17)
let smallestElement = sampleArray[0]
kata17.append(Math.min(...sampleArray))

//Display the largest element in sampleArray.
let kata18 = document.createElement('div')
let kataeighteenHeading = document.createElement('h3')
kataeighteenHeading.append('kata 18')
kata18.append(kataeighteenHeading)
kataList.append(kata18)
let largestElement = sampleArray[0]
kata18.append(Math.max(...sampleArray))




