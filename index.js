function getFirstSelector(s) {
  return document.querySelector(s);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function deepestChild(){
  var x = document.getElementById('grand-node').querySelectorAll('div')
  return x[x.length-1]
}
function increaseRankBy(n){
  let x = document.getElementsByClassName('ranked-list')
  let y = []
  let z = []
  for (var i = 0 ; i < x.length ; i++){
    y = x[i]
    for(var c = 0 ; c < y.length ; c++){
      z = y.pop()
    }
  }
  return z
}