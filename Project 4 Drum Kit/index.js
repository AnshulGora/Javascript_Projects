
var num = document.querySelectorAll(".drum").length; 

for(var i=0; i<num; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonPressed = this.innerHTML;
        playsound(buttonPressed);
        buttomanimation(buttonPressed);

    });
        //Function to check whether the file is responding or not
         function res()
        {//  { alert("I am Clicked"); 
         let music = new Audio('sounds/tom-4.mp3');
         music.play();
        }
         //Function to make innertext white one time click 
         function play() 
         {
            this.style.color = 'white';
          }

         } 
         
         document.addEventListener("keypress", function(event) {
              playsound(event.key);
              buttomanimation(event.key);

         });

        //  function kplaysound(Event)
        //  {
        //    playsound(Event.key);
        //  }

         function playsound(key)
         {
            

            switch (key) {
                case 'w':
                    let music = new Audio('sounds/tom-4.mp3');
                    music.play();
                    break;
                    
                case 'a':
                    let crash = new Audio('sounds/crash.mp3');
                    crash.play();
                     break;
                    
                     case 's':
                        let kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                         break;  
                     
                         case 'd':
                            let tomone = new Audio('sounds/tom-1.mp3');
                            tomone.play();
                     break;  
                     
                     case 'j':
                        let tomtwo = new Audio('sounds/tom-2.mp3');
                        tomtwo.play();
                     break;  
                     
                     case 'k':
                        let tomthree = new Audio('sounds/tom-3.mp3');
                        tomthree.play();
                     break;  
                     
                     case 'l':
                        let tomfour = new Audio('sounds/tom-4.mp3');
                        tomfour.play();
                      break;  

                default: alert("You pressed wrong key");
                    break;
            }

            function buttomanimation(ckey) {

                let thatkey = document.querySelector("." + ckey);

                thatkey.classList.add("pressed");

                setTimeout(() => { thatkey.classList.remove("pressed");
                    
                }, 2000);

            }
          
          }

        // let music = new Audio(Drum Kit Starting Files/ Drum Kit Starting Files/ Sounds/crash.mp3);
        // music.play();


