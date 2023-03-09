let valueContainer = document.getElementById('btn-Numbers');
console.log(valueContainer);
let appendDiv = '';
// valueContainer.innerHTML = '<>'
for(let i=1; i <= 4; i++){
    appendDiv += 
    '<div class="btn">'+[i]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let cut = document.getElementsByClassName('btn');
let newCut = Array.from(cut);
newCut[3].innerHTML = 'Del';
console.warn(newCut[3]);

for(let j=4; j <= 8; j++){
    appendDiv += 
    '<div class="btn">'+[j]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let dart= document.getElementsByClassName('btn');
let newdart = Array.from(dart);
newdart[8].innerHTML = '+';
console.warn(newdart[3]);
for(let k=8; k <=12; k++){
    appendDiv += 
    '<div class="btn">'+[k]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let ert = document.getElementsByClassName('btn');
let newErt = Array.from(ert);
newErt[12].innerHTML = '-';
console.warn(newErt[12]);

for(let l=12; l <= 16; l++){
    appendDiv += 
    '<div class="btn">'+[j]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let qurt= document.getElementsByClassName('btn');
let newqurt = Array.from(qurt);
newqurt[16].innerHTML = '*';
console.warn(newqurt[16]);