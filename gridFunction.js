let input= document.querySelector('#size');
const container = document.querySelector(".container");
input.addEventListener("click", (e)=>{
    
    let value=prompt("enter size");
    if(value <=0 || value >=100){
        alert("Please enter size between 1 - 100")
    }
    else{
        container.innerHTML = "";
        for(let i=0; i< value; i++){
            for(let j=0; j< value; j++){
                const grid = document.createElement("div");
                let width = 450/value;
                let height = 410/value;
                grid.style.width = width +"px";
                grid.style.height = height +"px";

                const container = document.querySelector(".container");
                grid.addEventListener("mouseover", (e)=> {
                    e.target.style.backgroundColor = "rgba(252, 181, 123, 1)";
                })
                container.appendChild(grid);
            }
        }
    }
})

for(let i=0; i< 16; i++){
    for(let j=0; j< 16 ; j++){
        const grid = document.createElement("div");

        grid.addEventListener("mouseover", (e)=> {
            e.target.style.backgroundColor = "rgba(252, 181, 123, 1)" 
        })

        container.appendChild(grid);
    }
}


