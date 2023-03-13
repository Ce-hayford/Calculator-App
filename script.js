let valueContainer = document.getElementById('btn-Numbers');
// console.log(valueContainer);

let appendDiv = '';
// valueContainer.innerHTML = '<>'
for(let i=1; i < 5; i++){
    appendDiv += 
    '<div class="btn">'+[i]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let cut = document.getElementsByClassName('btn');
let newCut = Array.from(cut);
newCut[3].innerHTML = 'Del';
// console.warn(newCut[3]);

for(let j=4; j < 8; j++){
    appendDiv += 
    '<div class="btn">'+[j]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let dart= document.getElementsByClassName('btn');
let newdart = Array.from(dart);
newdart[7].innerHTML = '+';
// console.warn(newdart[7]);

for(let k=7; k < 11; k++){
    appendDiv += 
    '<div class="btn">'+[k]+'</div>';
    valueContainer.innerHTML = appendDiv;
}
let ert = document.getElementsByClassName('btn');
let newErt = Array.from(ert);
newErt[11].innerHTML = '-';
// console.warn(newErt[11]);

let SubmitBtnContainer = document.querySelector('.submit-btn');
SubmitBtnContainer.innerHTML=`<input type="reset" class="resetBtn" value="reset" /> <input type="button" class="submitBtn" value="=" />`;
 
console.group(SubmitBtnContainer);
console.log(SubmitBtnContainer);