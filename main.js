let selOpt;
btnChipher.onclick=function(){
let p=passval.value;
let selOpt=sel.value;
res.value=chipher(p,parseInt(selOpt));
}
btnDecription.onclick=function(){
let p=passval.value;
let selOpt=sel.value;
res.value=decription(p,parseInt(selOpt));
}
btnDelete.onclick=function(){
passval.value='';
res.value="";
}


let arr=[];
for(let i=97; i<=122; i++){
arr.push(String.fromCharCode(i));
}
function chipher(password, n){
let chipherPass='';
for(let i=0; i<password.length; i++){
let currentIndex=arr.indexOf(password[i]);
if (currentIndex+n<=arr.length-1){
currentIndex+=n;
chipherPass+=arr[currentIndex];
}else{
let rem=arr.length-currentIndex;
currentIndex=n-rem;
chipherPass+=arr[currentIndex]; 
}
}
return(chipherPass);
}
chipher('creator',3);
function decription(password, n){
let decriptionPass='';
for(let i=0; i<password.length;i++){
let currentIndex=arr.indexOf(password[i]);
if(currentIndex-n>=0){
currentIndex-=n;
decriptionPass+=arr[currentIndex];
}else{
let rem=n-currentIndex;
currentIndex=arr.length-rem;
decriptionPass+=arr[currentIndex]; 
}

}
return(decriptionPass);
}
decription('fuhdwru',3)      

darkMode.onclick=()=>{
     function DL(){
        let dMode=localStorage.getItem('darkmode')==='true';
        localStorage.setItem('darkmode', JSON.stringify(dMode));
        if(dMode==='true'){
            localStorage.setItem('DarkModeNow', 'false');
        }else{
            localStorage.setItem('DarkModeNow', 'true');
            wrapp.style.backgroundColor="#333";
            title.style.color="#fff";
            card.style.backgroundColor="#efefef";
            card.style.border="none";   
        }
    }
    DL();
}
