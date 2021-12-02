var lan =document.querySelectorAll(".surah").length;

for(var i=0; i<lan; i++){
    document.querySelectorAll(".surah")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        animation(text);

        
        

        switch(text){
            case "AlIkhlas":
            var audio = new Audio("suraPlayer/112-al-ikhlas.mp3");
            audio.play();
            break;

            case "AlFalaq":
            var audio1 = new Audio("suraPlayer/113-al-falaq.mp3");
            audio1.play();
            break;

            case "AlNas":
            var audio2 = new Audio("suraPlayer/114-an-nas.mp3");
            audio2.play();
            break;

        }
    })

    function animation(text){

        var animeButton = document.querySelector("."+text);
        animeButton.classList.add("anime");

        setTimeout(function(){
            animeButton.classList.remove("anime");
        }, 1000);

        }
        
        
    }
