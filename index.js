let maxscore=0;
var highscore="highestscore";
if(maxscore==0){
function introduction(){
let currentscore=localStorage.getItem(highscore)
if(currentscore==0) alert("This is your first time");
else alert("highest score is"+currentscore )
}
}
var increase=0;
var rod1=document.getElementById("rod1");
var rod2=document.getElementById("rod2");
var ball=document.getElementById("ball");
var ballspeedx=4;
var ballspeedy=-4;
ball.style.left="0px";
ball.style.top="249px";
var stop;
window.addEventListener('keydown',function(event){
    //rodmovement
    if(event.keyCode==68&&increase<600){
        increase=increase+80;
        rod1.style.marginLeft=increase+"px";
        rod2.style.marginLeft=increase+"px";
    }
    if(event.keyCode==65&&increase>-600){
        increase=increase-80;
        rod1.style.marginLeft=increase+"px";
        rod2.style.marginLeft=increase+"px";
        
    }
    var rod1score=0;
    var rod2score=0;
    //ball movement
    if(event.keyCode==13){
         stop=setInterval(function(){
            let number1=parseInt(ball.style.left);
            let number2=parseInt(ball.style.top);
            ball.style.left=number1+ballspeedx+"px";
            ball.style.top=number2+ballspeedy+"px";
            if(ball.offsetTop<=56){
                if(ball.offsetLeft-rod1.offsetLeft<=200&&ball.offsetLeft-rod1.offsetLeft>=-40){
                    ballspeedy=-ballspeedy;
                    rod1score+=10;
                }
                else if(ball.offsetTop<10) stopfunction("rod2",rod2score);
            }
            if(ball.offsetTop>=511){
                if(ball.offsetLeft-rod2.offsetLeft<=200&&ball.offsetLeft-rod2.offsetLeft>=-40){
                    ballspeedy=-ballspeedy;
                    rod2score+=10;
                }
                else if(ball.offsetTop>579) stopfunction("rod1",rod1score);
            }
            if(ball.offsetLeft>=900){
                ballspeedx=-ballspeedx;
            }
            if(ball.offsetLeft<=203){
                ballspeedx=-ballspeedx;
            }
        },10)
   }
   function stopfunction(winner,points){
    clearInterval(stop);
   ball.style.left="0px";
   ball.style.top="249px";
   if(maxscore<points){
    maxscore=points;
    localStorage.setItem(highscore,maxscore);
   }
   ballspeedx=26;//reset all things
   ballspeedy=26;
   rod1.style.marginLeft="0px";
   rod2.style.marginLeft="0px";
   window.alert(winner + "wins with"+ points+ "score");
   }
})