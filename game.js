const buttonColours=['red','blue','green','yellow'];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var notwrong=false;
var currentlevel=0;



function randomNumber(){
        $("#level-title").text("Level "+level);
    
        var c=Math.random() *3;
        c=c.toFixed(0);
        var randomChosenColour=buttonColours[c];
        
        gamePattern.push(randomChosenColour);
        //alert("#"+randomChosenColour);
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
        


}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    console.log(gamePattern);
    console.log(userClickedPattern);
    var cc=checkanswer(currentlevel);
    if(cc===false){
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },400);
        $("#level-title").text("Game over.Press any key to play again");
        userClickedPattern=[];
        currentlevel=0;
        gamePattern=[];
        level=0;
    }
    else{
        playSound(userChosenColor);
        currentlevel++;
        if(currentlevel===level){
            setTimeout(function(){
                userClickedPattern=[];
                currentlevel=0;
                randomNumber();
            },500);
            

        }
    }
    
    


});

function checkanswer(level){
    if(gamePattern[level]!==userClickedPattern[level]){
        playSound("wrong");
        return false;
    }
    else{
        return true;

    }
    
}

function animatePress(name){
    $("#"+name).addClass("pressed");
    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    },100);
}

$(document).keydown(function(){
    randomNumber();
    
        
        

    

    
})

