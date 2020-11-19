// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let li = document.querySelectorAll("span.like-glyph")

function like(e) {
  heart = e.target
  console.dir(heart)
 mimicServerCall("").then(()=>{
  if (heart.textContent == EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.className = "activated-heart"
  } else {
    heart.textContent = EMPTY_HEART
    heart.className = "like-glyph"
  }
 }).catch((error) => {
    document.getElementById("modal").className = "";
    setTimeout(()=>{document.getElementById("modal").className = "hidden"}, 5000)
 })
  
}

for (let likes of li) {
  likes.addEventListener("click", like);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
