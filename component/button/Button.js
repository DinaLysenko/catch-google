export  function Button(name, callBack){
    let element=document.createElement('button')
    element.append(name)
    element.addEventListener('click', callBack)
    return element
}