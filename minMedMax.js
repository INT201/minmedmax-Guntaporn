const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let temp ;
  // 80 30 1
  
if (n1 > n2){
  temp = n1;
  n1 = n2 ;
  n2 = temp; 
}if (n1 > n3){
  temp = n1;
  n1 = n3;
  n3 = temp;
}if (n2 > n3){
  temp = n2;
  n2 = n3;
  n3 = temp;
}
return {"min" : n1, "mid" : n2,"max" : n3}

}

module.exports = minMedMax
