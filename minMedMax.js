const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500005 Guntaporn Pornmanee
function countPosNegValue(posNegIntegerArray) {
  //code here
  if (posNegIntegerArray === null || posNegIntegerArray === undefined){
    return undefined
  }
  if (posNegIntegerArray.length===0){
    return {}
  }

let pos=0
let neg=0
for (const num in posNegIntegerArray ){
  if (num > 0){
     pos++
   }if (num < 0){
     neg ++
   }else if (num === 0 ){
     neg = 0
     pos = 0
   }
return {positive: pos, negative: neg}
}
}
module.exports = countPosNegValue
