window.onload = function(){
    // get the modal
    let modal = document.getElementById("myModal");
    // get content
    let modalContent = document.querySelector(".modal-content");
    // get all the boxes
    let boxes = document.getElementsByClassName("box");

    console.log(modalContent);

    // loop through all boxes
    for (let i = 0; i < boxes.length; i++){
        // attach click listener for each box
        boxes[i].onclick = function(event){
            modal.style.display = "block";
        }
    }

    // get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // when the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // when the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}