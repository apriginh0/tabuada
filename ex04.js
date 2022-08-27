function tabuada() {
    var txtn = window.document.querySelector('input#txtn')
    var tabor = window.document.querySelector('select#seltabor')
    var tabile = window.document.querySelector('select#seltabile')
    
    if(txtn.value.length == 0) {
        window.alert('Digita um número, ow disgraça!')
    } else {
        var inumb = Number(txtn.value)
        var pnumb = 0
        tabor.innerHTML = ''
        for(pnumb=0; pnumb <= 10; pnumb++){
            let itemor = document.createElement('option')
            itemor.text = `${inumb}x${pnumb} = ${inumb*pnumb}`
            itemor.value = `tabor${pnumb}` // vai criar uma marcação pra cada item
            tabor.appendChild(itemor) // permitindo saber qual foi selecionado
        }
       /* while(pnumb <= 10){
            let itemile = document.createElement('option')
            itemile.text = `${inumb}x${pnumb} = ${inumb*pnumb}`
            tabile.appendChild(itemile)
            pnumb++
        } */
    }
}