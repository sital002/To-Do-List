
// let current_tasks=document.querySelectorAll(".delete");
let addBtn=document.querySelector("#push");
let inputField=document.querySelector("#new-task input");    
chkEnter();

addBtn.onclick=function(){
    CreateTask();
    ChkTaskstats();
   
}

//Checking the whether the enter key is pressed or not.


function chkEnter(){
   inputField.addEventListener("keypress",(event)=>{
        if(event.key=='Enter'){
            console.log("Task Added");
            CreateTask();
            ChkTaskstats();
    }
});
}
function CreateTask(){
    if(inputField.value.length==0){
        // addBtn.disabled=true;
        // alert("Enter a Task");
        }
        else{

            document.querySelector("#tasks").innerHTML+=
             `
            <div class="tasks">
            <span class="taskname">
            ${inputField.value}
            </span>
            <button class="delete">DELETE</button>
            </div>
            `
            inputField.value="";
            inputField.focus();
        }
    }
    function ChkTaskstats(){
        let current_tasks=document.querySelectorAll(".delete");
        let tasks=document.querySelectorAll(".taskname");
        for(i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            } }
            for(i=0;i<tasks.length;i++){
                tasks[i].onclick=function(){
                    this.classList.toggle("completed");
                }
            }
    }

   
    