const { Basket } = require("./Basket");
import {dataObj} from "./data.js"

let basket = new Basket(dataObj);

basket.renderList(dataObj); 
basket.addListeners(dataObj)
document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault(); 
    basket.callbackAdd(dataObj)
    popup.classList.remove('show');
})

document.getElementById('apply').setAttribute("disabled", true)

document.getElementById('apply').addEventListener('click', (e) => {
    e.preventDefault()
    basket.callbackEdit(basket.red(basket.itemsNum, 'edit'))
    popup.classList.remove('show');
})

document.getElementById('cancel').addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('show');
})

document.getElementById('add').setAttribute("disabled", true)

document.getElementById('name').addEventListener('input', () => {    
        document.getElementById('add').removeAttribute("disabled")
        document.getElementById('apply').removeAttribute("disabled")
})

document.getElementById("outsideAdd").addEventListener("click", (e) => {
    document.getElementById('name').value = ""
    document.getElementById('price').value = ""
    e.preventDefault()
    document.getElementById('apply').style.display = "none"
    document.getElementById('add').style.display = "inline-block"
    if(document.getElementById('name').value === "" ){
        document.getElementById('add').setAttribute("disabled", true)
    } else {
        document.getElementById('add').setAttribute("disabled", false)
    }
    popup.classList.add("show")
})

