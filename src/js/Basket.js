import {dataObj} from "./data"

window.data = dataObj
export class Basket {
    constructor(data){
        this.mainBlock = document.getElementById('listContainer');        
        this.itemsNum               
    }

    find(id) {      
        console.log(data)   
        return data.find(item => item.id == id);
    }

    clearList() {
        while (this.mainBlock.children.length > 1){
            this.mainBlock.removeChild(this.mainBlock.lastChild)            
        }
    }
    parseList(data){
        console.log(data) 
            let resultArr = data.map((item) => {       
                return `<tr id="${item.id}"><td>${item.name}</td><td>${item.price}</td><td class="actions"><button class="edit">edit</button><button class="del">del</button></td></tr>`
            })
            return resultArr.join('').replace(',', "")
    }

    renderList(data){
        this.clearList()
        console.log(data) 
        this.mainBlock.innerHTML += this.parseList(data)        
    }

    addListeners(data) {        
        document.getElementById('listContainer').addEventListener("click", (e) => {
            let id = e.target.closest("tr").id             
            this.itemsNum = id
            let finded = this.find(id)      
            e.preventDefault()
            if(e.target.classList.contains('edit')){
                document.getElementById('apply').style.display = "inline-block"
                document.getElementById('add').style.display = "none"

                document.getElementById('name').value = finded.name;
                document.getElementById('price').value = finded.price;
                popup.classList.add('show');
   
                
            } else if(e.target.classList.contains('del')){                                
                data = data.filter((i) => i !== this.find(id))
                console.log(data)                
                this.renderList(data)
            }
        })
    }

    callbackEdit(sought){
        if(document.getElementById('name').value === "" && document.getElementById('price').value === ""){
            return
        }
        sought.name = document.getElementById('name').value;
        sought.price = +document.getElementById('price').value; 
        console.log(data) 
        this.renderList(data)    
        
    }  

    callbackAdd(data){
        if(document.getElementById('name').value === "" && document.getElementById('price').value === ""){
            return
        }
        console.log(typeof document.getElementById('price').value)
        let newObj = {
            id: data.length + 1,
            name: document.getElementById('name').value,
            price: +document.getElementById('price').value, 
        }
        data.push(newObj)
        console.log(data) 
        this.renderList(data)    
        
    }

    red(id){      
        let finded = this.find(id)
        return finded          
    }
}

