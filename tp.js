var color = ["#222f3e","#dd260e", "#0ae196c","#0a7ce1","#a60ae1"];
var i = 0;
document.querySelector("button").addEventListener("click",
    function(){
        i = i < color.length ? ++i : 0;
        document.querySelector("body").style.background = color [i];
    }
);