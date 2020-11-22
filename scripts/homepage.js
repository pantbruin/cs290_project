
// For help on the carousel, I looked at https://www.w3schools.com/howto/howto_js_slideshow.asp
// to get an idea of how to go about implementing a carousel.
// I then gave it my own twist by using simple DOM manipulation and css properties

defaultCarouselMovement()

document.getElementById("forward").addEventListener("click", forwardSlide)
document.getElementById("backward").addEventListener("click", backwardSlide)

function defaultCarouselMovement(){
  var currentImage = document.getElementById('activeImage')
  var nextImage = undefined
  var nextSibling = currentImage.nextElementSibling
  var ignoredChild = document.getElementsByClassName('ignoreChild')[0]

  if(nextSibling.isSameNode(ignoredChild)){
    var nextImage = document.getElementById('carousel-slide').firstElementChild
  } else{
    var nextImage = document.getElementById('activeImage').nextElementSibling
  }

  currentImage.id = ''
  nextImage.id = 'activeImage'
  setTimeout(defaultCarouselMovement, 4000);
  }

function forwardSlide(){
  var currentImage = document.getElementById('activeImage')
  var nextImage = undefined
  var nextSibling = document.getElementById('activeImage').nextElementSibling
  var ignoredChild = document.getElementsByClassName('ignoreChild')[0]

  if(nextSibling != ignoredChild){
    var nextImage = document.getElementById('activeImage').nextElementSibling
  } else{
    var nextImage = document.getElementById('carousel-slide').firstElementChild
  }

  currentImage.id = ''
  nextImage.id = 'activeImage'
}

function backwardSlide(){
  var currentImage = document.getElementById('activeImage')
  var previousImage = undefined
  var ignoredChild = document.getElementsByClassName('ignoreChild')[0]

  if(document.getElementById('activeImage').previousElementSibling){
    var previousImage = document.getElementById('activeImage').previousElementSibling
  } else{
    var previousImage = ignoredChild.previousElementSibling
  }

  currentImage.id = ''
  previousImage.id = 'activeImage'
}
