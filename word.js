function pigInt(str){
   const arr = Array.from(str.split(' '))
   console.log(arr)
   arr.map((e) => {
    let move = Array.from(e)
    let end = move[0] + 'ay'
    console.log(end)
    move.shift()
    move.push(end)
    return move.join('')
   })
    
}
pigInt('maybe you are the problem')
