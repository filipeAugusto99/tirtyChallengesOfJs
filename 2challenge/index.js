function chunks(number) {
  if(number === 1) {
    return 'chunks'
  } else {
    return 'chunks-' + chunks(number - 1)
  }
}

console.log(chunks(3))