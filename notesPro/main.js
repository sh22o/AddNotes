const notesContiner = document.querySelector('.notes-continer'); 
const createBtn = document.querySelector('.btn'); 
//make quarryselectorall to select all notes 
let notes = document.querySelectorAll('.input-notes'); 


function Show(){
    notesContiner.innerHTML=localStorage.getItem("Notes");
    
} 
Show(); 


function updateStorage(){
    localStorage.setItem("Notes",notesContiner.innerHTML) 
    
}

//creat notes 
createBtn.addEventListener('click',()=>{
  let inputBox= document.createElement('p'); 
  let img =document.createElement('img'); 
  inputBox.className='input-notes'; 
  inputBox.setAttribute("contenteditable","true"); 
  img.src="images/delete.png"; 
  notesContiner.appendChild(inputBox).appendChild(img); 



}) 
//delete notes 
notesContiner.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove(); 
        //update storage after delete 
        updateStorage(); 

    }else if(e.target.tagName ==='p'){ 
        notes=document.querySelectorAll('.input-notes').value;
        notes.forEach(nt=>{
            nt.onkeyup= function(){
                updateStorage(); 

            }
        })

    }
})
