document.getElementById("funnyForm").addEventListener("submit", function(e){
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value;
    const number = document.getElementById("number").value;

    if (!isNaN(name)) {
      alert("Error: Your name can't be a number!");
      return;
    }

    if (!isNaN(color)) {
      alert("Error: Your favorite color can't be a number!");
      return;
    }

    if (isNaN(number) || number === "") {
      alert("Error: Your favorite number must actually be a number!");
      return;
    }

    alert(`Thanks, ${name}!\nYour favorite color is ${color} and your favorite number is ${number}.\nThis data will be very useful in the next step of the operation!`);

});