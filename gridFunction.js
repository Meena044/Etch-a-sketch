
let input= document.querySelector('#size');
const container = document.querySelector(".container");
defaultGrid(16);


input.addEventListener("click", (e)=>{
    
    let value=prompt("enter size");
    if(value <=0 || value >100 || isNaN(Number(value))){
        alert("Please enter size between 1 - 100")
    }
    else{
        container.innerHTML = "";
        defaultGrid(value);
    }
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    container.innerHTML = "";
    defaultGrid(16);
})

// default grid function 16x16 grid
function defaultGrid(size){
    for(let i=0; i< size; i++){
        for(let j=0; j< size ; j++){
            const grid = document.createElement("div");
            let boxsize = 450/size;
            grid.style.width = boxsize +"px";
            grid.style.height = boxsize +"px";
            grid.dataset.colorCounter = 0; //in HTML it will look like data-colorCounter

            grid.addEventListener("mouseover", (e)=> {
                let shade = parseInt(grid.dataset.colorCounter);
                if(shade<10){
                    shade += 1
                    e.target.style.backgroundColor =`rgba(69, 10, 117, ${shade * 0.1} )` ;
                    grid.dataset.colorCounter = shade;
                }
            })

            container.appendChild(grid);
        }
    }
}


