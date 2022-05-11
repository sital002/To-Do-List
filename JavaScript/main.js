
// let current_tasks=document.querySelectorAll(".delete");
let addBtn=document.querySelector("#push");
let inputField=document.querySelector("#new-task input"); 
let popUpBox= document.querySelector("#pop-up");

const addedMsg="Task Added Successfully";   
const removeMsg="Task Removed Successfully";   
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
            popUpMsg(addedMsg,"green");
            inputField.value="";
            inputField.focus();
        }
    }
    function ChkTaskstats(){
        let current_tasks=document.querySelectorAll(".delete");
        let tasks=document.querySelectorAll(".taskname");
        for(i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                // popUpBox.style.backgroundColor="red";
                popUpMsg(removeMsg,"red");
                this.parentNode.remove();
            } }
            for(i=0;i<tasks.length;i++){
                tasks[i].onclick=function(){
                    this.classList.toggle("completed");
                }
            }
    }

   
    function popUpMsg(Msg,color){
       popUpBox.classList.add("pop-up");
       popUpBox.style.backgroundColor=color;
       popUpBox.innerHTML=
        `
        <span>${Msg}</span>

        `
        setTimeout(function(){
            popUpBox.classList.remove("pop-up");
            popUpBox.innerHTML="";
        },3000);
    }