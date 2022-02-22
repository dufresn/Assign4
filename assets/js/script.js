// Get the modal
photo = document.querySelector(".photo").style.background = 'url("img/item1.jpg") center center/cover no-repeat';
var modal = document.getElementById("myModal");

capt = document.querySelector(".title");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
document.querySelector(".photo").onclick = function(){
  modal.style.display = "block";
  modalImg.style.background = this.style.background;
  captionText = capt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}