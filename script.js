'use strict';
document.querySelector('.react').textContent = prompt('Please Enter Your Mathematics score') 
document.querySelector('.mem').textContent = prompt('Please Enter Your English score')
document.querySelector('.verb').textContent = prompt('Please Enter Your Verbal score') 
document.querySelector('.vis').textContent = prompt('Please Enter Your Quantitative score')
let react_score = document.querySelector('.react').textContent 
let keyword = document.querySelector('.percent')
let mem_score = document.querySelector('.mem').textContent
let verbal_score = document.querySelector('.verb').textContent
let visual_score = document.querySelector('.vis').textContent
const scores = [Number(mem_score),Number(visual_score),Number(react_score),Number(verbal_score)]
document.querySelector('.cont').addEventListener('click',function() {
    let sum  = 0 
scores.forEach(n => sum += n)
let average = sum/scores.length
document.querySelector('#score').textContent = Math.trunc(average)

if(average >= 60){
keyword.textContent = 'Congratulation!🎉🎉 you passed the test.You can now proceed to the next grade'
// document.querySelector('#score').style.marginLeft = 
}else if(average < 60 && average > 10){
keyword.textContent = 'Ooh I am sorry😥 but you did not pass the test.You can always try again'
}else if(average >= 100){
    keyword.textContent = 'Ahh Ogbon You are welcome to the club you too smart abi😒'
}
else if(average = 0 || average < 10){
document.querySelector('#score').style.marginLeft = '75px'
    keyword.textContent = 'I already spoke with your father not to waste his money you are meant to be in the mechanic workshop 🤦‍♂️.You be OLODO!!!'
}
})


// const add = function(...scores){
//  let sum = 0;
//  for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
//   console.log(sum)
//  }
// }



