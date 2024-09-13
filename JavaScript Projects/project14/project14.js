const item =document.querySelector("#item");
const todobox =document.querySelector("#to-do-box");
 

item.addEventListener(
    "keyup" ,
    function(event)
    {
        if(event.key =="Enter")
            
          {  addToDo(this.value);
            this.value="";}
    }

)

const addToDo=(item)=>
{
    const listItems=document.createElement("li");
    listItems.innerHTML=`
            ${item};
            <i class="fas fa-times"></i>
    `;

    listItems.addEventListener("click",
        function()
        {
            this.classList.toggle("done");

        }

    )

    listItems.querySelector("i").addEventListener("click",
            function()
            {
                listItems.remove();
            }
    )
    todobox.appendChild(listItems);
}