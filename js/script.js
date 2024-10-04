// Js code

const taskInput=document.getElementById('taskInput');
const taskList=document.getElementById("taskList");

//

function addTask(){
    const tasktext=taskInput.value.trim();

    const li=document.createElement('li');
    
    if(tasktext=="")return;

    li.innerHTML=`<span>${tasktext}</span>
                       <button onclick="doneTask(this)">Done</button>
                       <button onclick="editTask(this)">Edit</button>
                       <button onclick="deleteTask(this)">Delete</button>`

     taskList.appendChild(li);
     taskInput.value="";

     

}

//functions
function doneTask(button){

   const task=button.parentElement;
   //console.log(task);
   task.classList.toggle('completed');

}

//function to delete task:

function deleteTask(button){ 
   const task  = button.parentElement;
   task.remove(); 
}


//function to edit the task

function editTask(button){
   const task=button.parentElement;
    
   const span=task.querySelector('span');

   const newtext=prompt('Edit your task',span.innerText);
   if(newtext!==""){
      span.innerText=newtext;
   }
}