//declare samecolor() here
function samecolor(){
  let newcolor = "#FF0000";
  let div = querySelector('#samecolor div');
  for(let c = 0;c<fiv.length;c++){
    dic[c]style.backroundColor = newcolor;
    div[c]style.opacity = 0.5*[c];
  }
}
//declare diffcolor() here
function diffcolor(){
  let color = "#0000FF";
  let complement = "#0000FF";
  let div = querySelectorAll("diffcolor div");
  for(c = 0;)
  div[c]style.backgroundColor = color;
  div[c]style.opacity = .5*[c];

}
