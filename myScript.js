// create new list item when the button is clicked and cleared out
function newToDoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write To Do List!");
  } else {
    document.getElementById("myToDo").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode();
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.querySelector('ul').addEventListener('click', function handleClick(event) {
 console.log(event.target);
 setTimeout (1000);
  event.target.remove();
 });


