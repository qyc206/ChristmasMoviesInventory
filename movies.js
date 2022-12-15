// page loader logic
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".center").style.visibility = "visible";
    } else {
        document.querySelector(".center").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

window.onload = function(){
    // get the modal
    let modal = document.getElementById("myModal");
    // get movie content template
    let modalContentMovie = document.querySelector("#modalMovie");
    // get activity content template
    let modalContentActivity = document.querySelector("#modalActivity");
    // get message template
    let modalContentMessage = document.querySelector("#modalMessage");
    // get all the boxes
    let boxes = document.getElementsByClassName("box");

    // loop through all boxes
    for (let i = 0; i < boxes.length; i++){
        // attach click listener for each box
        boxes[i].onclick = function(event){
            let activity = boxes[i].getElementsByClassName("activity")[0];

            modal.style.display = "block";
            if (activity != undefined){ // if there is an activity hidden
                if (activity.id == "movie"){  // box contains a movie 
                    modalContentMovie.style.display = "block";

                    modalContentMovie.querySelector("#poster").src =
                            activity.querySelector("#poster").src;
                    modalContentMovie.querySelector("#poster").alt =
                            activity.querySelector("#poster").alt;

                    modalContentMovie.querySelector("#trailer").src =
                            activity.querySelector("#trailer").src;
                    modalContentMovie.querySelector("#trailer").alt =
                            activity.querySelector("#trailer").alt;

                    modalContentMovie.querySelector("#title").textContent = 
                            activity.querySelector("#title").textContent;

                    modalContentMovie.querySelector("#rate").textContent = 
                            activity.querySelector("#rate").textContent;

                    modalContentMovie.querySelector("#year").textContent = 
                            activity.querySelector("#year").textContent;

                    modalContentMovie.querySelector("#genre").textContent = 
                            activity.querySelector("#genre").textContent;

                    modalContentMovie.querySelector("#description").textContent = 
                            activity.querySelector("#description").textContent;

                } else {   // box contains an activity
                    modalContentActivity.style.display = "block";

                    modalContentActivity.querySelector("#activityImage").src =
                            activity.querySelector("#activityImage").src;
                    modalContentActivity.querySelector("#activityImage").alt =
                            activity.querySelector("#activityImage").alt;

                    modalContentActivity.querySelector("#breakHeading2").textContent = 
                            activity.querySelector("#breakHeading2").textContent;

                    modalContentActivity.querySelector("#breakDescription").innerHTML = 
                            activity.querySelector("#breakDescription").innerHTML
                }
            } else {
                modalContentMessage.style.display = "block";
                modalContentMessage.innerHTML = "<h1>UNDER CONSTRUCTION...</h1>";
            }
        }
    }

    // get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // when the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        modalContentActivity.style.display = "none";
        modalContentMovie.style.display = "none";
        modalContentMessage.style.display = "none";
    }

    // when the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalContentActivity.style.display = "none";
            modalContentMovie.style.display = "none";
            modalContentMessage.style.display = "none";
        }
    }
}