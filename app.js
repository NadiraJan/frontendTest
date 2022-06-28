
let sidebar = document.querySelector(".sidebar")


console.log(sidebar.children)

function toonItem(e){
    console.log(e.firstChild.nextSibling.innerHTML)
    for(let x=0; x<sidebar.children.length; x++){
       
  

    if(sidebar.children[x].firstChild.nextSibling.innerHTML==e.firstChild.nextSibling.innerHTML){
        sidebar.children[x].lastChild.previousSibling.style.display ="block"
    }else{
            sidebar.children[x].lastChild.previousSibling.style.display ="none"

        }

}}

function closeItem(e){
    console.log("piep")
    for(let x=0; x<sidebar.children.length; x++){
        if(sidebar.children[x].firstChild.nextSibling.innerHTML==e.firstChild.nextSibling.innerHTML){
            sidebar.children[x].lastChild.previousSibling.style.display="none"
        }
    }
}