let h1=document.querySelector(".timer");
let start=document.querySelector(".start");
let pause=document.querySelector(".pause");
let inp=document.querySelector("input");
let stop;
let val;
function startCountdown(){
    val=inp.value;
    console.log(val)
    if(!val){
        return;
    }
    h1.innerText=val;
  val--;
    let id=setInterval(()=>{
        
        if(val<0){
            clearInterval(id);
            return;
            
        }
        if(!stop){h1.innerText=val;
        val--;
        }
    },1000);
}

function pauseCountdown(){

     val=parseInt(h1.innerText);
    h1.innerText=val;
    inp.value=val;
    
    

}
start.addEventListener("click",(e)=>{
    stop=false;
    startCountdown();

    
    
    
   
})
pause.addEventListener("click",(e)=>{
    stop=!stop;
  pauseCountdown();
})
