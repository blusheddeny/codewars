function pigIt(str){
     var res = Array.from(str.split(' ')).map((e) => {
      var move = Array.from(e)
      if(e != '!' && e != '?'){
      var end = move[0] + "ay"
      move.shift()
      move.push(end)
      }
      return move.join('')
    

  })
  return res.join(' ')
}
