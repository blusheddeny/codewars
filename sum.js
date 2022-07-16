//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  let max = Math.max(a,b)
  console.log(max)

  let min = Math.min(a,b)
  console.log(min)

  const interval = []
  
  for(let i = min; i <= max; i++){
    interval.push(i)
    
  }

    
  const res = interval.reduce((a,b) => a+b)
  return res

} 
    

getSum(1,0 )
getSum(1, 2)
getSum(0, 1)
getSum(1, 1)
getSum(-1, 0)
getSum(-1, 2)



//interesting answer
//https://stackoverflow.com/questions/18947892/creating-range-in-javascript-strange-syntax
