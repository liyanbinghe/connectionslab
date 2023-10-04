console.log("hello");
const audioPlayer = document.getElementById("audioPlayer");
let button = document.getElementById("feelButton");
let jsonData = []; 
    
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
       document.getElementById("overlay-container").style.display="block";
}

document.getElementById("aBook").addEventListener("click", function() {
        const content = document.getElementById("nextPage");
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
    
    //fetch the data from the json
    fetch("data.json") 
    .then(function (response) { 
        console.log(response);
        return response.json();
    })
    .then(function(data) { 
    console.log(data);
    })

    jsonData = data.guessData
    document.getElementById("whatClass").addEventListener("click", function() {
        if (jsonData && jsonData.length > 0) {
            // Randomly select a class from the guessData array
            const randomClass = jsonData[Math.floor(Math.random() * jsonData.length)];
            document.getElementById("whatClass").innerText = randomClass;
        }
    });


   
    
        
