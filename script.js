const typingName = "I'm Rui Nobre Martins.";
const typingElement = document.getElementById("typingName");

let index = 0;

function typeWriter() {
  if(index < typingName.length){
    typingElement.textContent += typingName.charAt(index);
    index++;
    setTimeout(typeWriter,100)
  }
}
typeWriter();

function showSideBar(){
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "flex";
  // Use setTimeout to allow display change before transform
  setTimeout(() => {
    sideBar.classList.add("active");
  }, 10);
}

function hideSideBar(){
  const sideBar = document.querySelector(".sideBar");
  sideBar.classList.remove("active");
  // Wait for transition to complete before hiding
  setTimeout(() => {
    sideBar.style.display = "none";
  }, 300);
}



