console.log("hello");
    const audioPlayer = document.getElementById("audioPlayer");


    let button = document.getElementById("feelButton");
 
    button.addEventListener("click", nextPage);

    function nextPage() {
       let image = document.getElementById('classroom');
      // image.src="image2.png";
       image.classList.add("pageTwoImage");
       document.getElementById('feelButton').style.display = "none";
       document.getElementById('firstClass').style.display = "none";
       document.getElementById('meInAnxiety').style.display = "none";
       document.getElementById('audioPlayer').style.display = "none";
       document.getElementById("lost").style.display="block";
       document.getElementById("classroom").style.display="block";
    }