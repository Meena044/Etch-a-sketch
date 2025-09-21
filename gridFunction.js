const container = document.querySelector(".container");
defaultGrid(16);

let input= document.querySelector('#size');
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
reset.addEventListener("click", (e)=>{
    container.innerHTML = "";
    defaultGrid(16);
})


const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn) => {
    btn.addEventListener("mousedown", (e)=>{
        e.target.style.backgroundColor = "rgba(213, 184, 228, 1)";
    })
});

buttons.forEach((btnn)=>{
    btnn.addEventListener("mouseout", (e)=>{
    e.target.style.backgroundColor = "rgb(95, 8, 136)";
    });
});

// grid function to create square divs dynamically
function defaultGrid(size){
    for(let i=0; i< size; i++){
        for(let j=0; j< size ; j++){
            const grid = document.createElement("div");
            let boxsize = 450/size;
            grid.style.width = boxsize +"px";
            grid.style.height = boxsize +"px";
            grid.dataset.colorCounter = 0; //in HTML it will look like data-colorCounter

            grid.addEventListener("mouseover", (e)=> {
                let shade = parseInt(grid.dataset.colorCounter); //dataser stores value as string
                if(shade<10){
                    shade += 1
                    e.target.style.backgroundColor = `rgba(252, 8, 40, ${shade * 0.1} )` ;
                    grid.dataset.colorCounter = shade;
                }
            })

            container.appendChild(grid);
        }
    }
}


