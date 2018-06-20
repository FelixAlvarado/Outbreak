document.addEventListener("DOMContentLoaded", function () {
  let instructions = document.getElementById("modal-background");
  let openI = document.getElementById("instructions");
  let close = document.getElementById("close");

  openI.addEventListener("click", () => {
    console.log('made it');
    instructions.style.display = "block";
  });

  close.addEventListener("click", () =>{
    instructions.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === instructions){
      instructions.style.display = "none";
    }
  });


});
