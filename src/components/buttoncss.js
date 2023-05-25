const B1=()=>{
    const x =document.getElementById('add')
    x.classList.add('underlined')

    
    const y =document.getElementById('add1')
    y.classList.remove('underlined')
    
}

const B2=()=>{
    const x =document.getElementById('add')
    x.classList.remove('underlined')
   
    const y =document.getElementById('add1')
    y.classList.add('underlined')
    
}


export{
    B1,
    B2
}