let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let completeContainer = document.querySelector(".complete-container");

theAddButton.onclick = function () {
    if (theInput.value === '') {
        console.log("No Value");
    } else {
        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let completeElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Delete");
        let completeText = document.createTextNode("Complete");
        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';
        mainSpan.appendChild(deleteElement);
        completeElement.appendChild(completeText);
        completeElement.className = 'complete';
        mainSpan.appendChild(completeElement);
        tasksContainer.appendChild(mainSpan);
        theInput.value = '';
        storeTasks()
    }
};

document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
        storeTasks()
        storeCompletes()
    }else if (e.target.className == 'complete') {
        e.target.parentNode.remove();
        storeTasks()
        let mainSpan = document.createElement("span"); 
        let innerSpanText=e.target.parentNode.innerText;       
        let text = document.createTextNode(innerSpanText.replace("DeleteComplete",""));
        mainSpan.appendChild(text);
        let deleteElement = document.createElement("span");
        let deleteText = document.createTextNode("Delete");
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';
        mainSpan.appendChild(deleteElement);
        mainSpan.className = 'complete-box';
        completeContainer.appendChild(mainSpan);
        storeCompletes()
    }
});

function storeTasks() {
    window.localStorage.myitems = tasksContainer.innerHTML;
}
function storeCompletes() {
    window.localStorage.completes = completeContainer.innerHTML;
}

function getValues() {
    var storedValues = window.localStorage.myitems;
    var comleteValues = window.localStorage.completes;

    if (!storedValues) {
    }
    else {
        tasksContainer.innerHTML = storedValues;
    }
    if (!comleteValues) {
    }
    else {
        completeContainer.innerHTML = comleteValues;
    }
}
getValues();
