function newlist() {
    var list = document.createElement("li");
    var inputList = document.getElementById("myInput").value; // Use .value to get the input value
    var text = document.createTextNode(inputList, "'></button>");
    list.appendChild(text);
    var listContainer = document.querySelector(".list-item");
    listContainer.appendChild(list);

    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("delete");
    button.className = "deletebtn";
    button.appendChild(txt);
    list.appendChild(button);
}

document.querySelector(".addbtn").addEventListener("click", newlist);


document.getElementById("myInput").addEventListener("keydown", (event) => {
    if (event.isComposing || event.key !== "Enter") {
        return;
    }
    newlist();
});


var listContainer = document.querySelector(".list-item");
listContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("deletebtn")) {
        var div = event.target.parentElement;
        div.style.display = "none";
    }
});



var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);