//loading Screen
const loader = document.getElementById("loader")

window.addEventListener("load", ()=>{
    setTimeout(() =>{
        deactivate()
    }, 2000)
    const deactivate = () => {
        loader.classList.add('hidden');
    }
});