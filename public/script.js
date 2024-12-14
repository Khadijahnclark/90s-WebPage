//loading Screen
// const loader = document.

// window.addEventListener("load", ()=>{

//     setTimeout(() =>{
//         deactivate()
//     }, 3000)

//     const deactivate = () => {
//         loader.classList.add("hidden");
//     };
// });
window.onload = function () {
    const container = document.getElementById("inner-progress-container");
    
    const numBlocks = 13;

    let currentBlock = 0;

    const interval = setInterval(() => {
        if (currentBlock < numBlocks) {
            const block = document.createElement("div");
            block.setAttribute("id", "progress-block");
            block.classList.add("bg-cyan-950", "w-5", "h-5", "ml-1");
            container.appendChild(block);
            currentBlock++;
        } else {
            clearInterval(interval); 
        }
    }, 200); 

};