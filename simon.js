let  gameseq=[];
let userSeq=[];
let btns=["aqua","pink","brown","blue"];
let started=false;
let  level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    console.log("game started");
    if(started==false){
        started=true;
        levelUp();
    
    }
   
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]==gameseq[idx]){
       if(userSeq.length==gameseq.length){
           setTimeout(levelUp,750);
       }
    }else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },100)
        h2.innerText=`Game Over! Press any key to start`;
        reset();
    }
}
function btnpress(){
    console.log("btn was  pressed");
    let btn=this;
    btnflash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
     started=false;
     level=0;
      gameseq=[];
     userSeq=[];
}
