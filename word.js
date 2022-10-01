function pigIt(str){
  //convert string to array
  //add map method to iterate through words
     var res = Array.from(str.split(' ')).map((e) => {
      //create array from word
       var move = Array.from(e)
       //conditional to ignore special characters
      if(e != '!' && e != '?'){
        //ending of each word
        var end = move[0] + "ay"
        //remove letter in index 0
      move.shift()
        //add the ending to each word
      move.push(end)
      }
       //join words without commas
      return move.join('')
    

  })
     //resultant string
  return res.join(' ')
}
