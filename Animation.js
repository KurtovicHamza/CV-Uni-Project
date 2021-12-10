//Function for go back to top of page

var mybutton = document.getElementById("btn");

//function will activate itself when we perform scrolling down on page (event)
window.onscroll = function() {
  scrollFunction();
}

//function for the appearance of Button, which will appear once we scroll down the page for more than 300 pixels
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { //two declarations because some browsers work with one and not with other
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//actual work of function. Go back to top when we click on the button(arrow)
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//jQuery Animation for title

// Wrap every letter in a span
var textWrapper = document.getElementById('animated_title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='l'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '#animated_title .l',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    });


    //printing skills using for loop and array
    function PrintSkills() {
        
        let skills = ['Problem Solving','Teamwork skills','Fast learner',
        'Bilingual','Programming','Critical thinking','Creativity'];
        var menu = document.querySelector("#skilz");
        
        for (let i=0; i<skills.length; i++) {
        var skill = document.createElement("li");
        skill.textContent = skills[i];
        menu.appendChild(skill);
    }  
          
    } 

    //printing some basic data about me using object in js    
    function PrintAuthor() {
        const author = {firstName:"Hamza", lastName:"Kurtovic", age:21, city:"Sarajevo",country : "BiH", university:"International University of Sarajevo, IUS",department:"Computer Science and Engineering"};
        document.getElementById("bio-body").innerHTML= 
       " My name is "+ author.firstName+ " " +author.lastName +". I am " + author.age+ " years old and I live in "+author.city+", "+ author.country+"."
        +"I am currently enrolled in a third year of Bachelor study of "+ author.department+" at "+
      author.university+ " I am talented in many different things and I can get a hang of different techniques quickly,"+
     " making me a valuable team player, who aspires to be in command of every task he is given,"+
       " in order to finish the task as fast and efficiently as possible."+
        "Hard-working, skilled and dedicated to any given task, will bring good things to the company and surroundings.";
        
    } 

/*Greeting message in the beginning, which changes based on the time of the day, implemented with switch*/

   function PrintGreeting() {
            
        var today = new Date();
        var time = today.getHours();

       switch (true) {
        case (time<12 && time>=5):
          text = "Good morning";
          break;

        case (time<18 && time>=12):
          text = "Good afternoon";
          break;

        case (time<23 && time>=18):
          text = "Good evening";
          break;

          default:
            text = "Have a nice day";
            break;
      }

      let modal = document.getElementById("time");
      modal.innerHTML = text;
    }



    
    //function to display popup message

function OpenModal() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // the popup will disappear after we press anywhere beside it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    }