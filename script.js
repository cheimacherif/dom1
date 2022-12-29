var btnPls = document.querySelectorAll (".plus")
console.log(btnPls)

var minBtn = document.querySelectorAll (".moins")
console.log(minBtn)

var qte = document.querySelectorAll (".count")
console.log(qte)
console.log(typeof +(qte[0].value))

var tot = document.querySelector (".total")
console.log(+tot.value)

var price = document.querySelectorAll (".price")
console.log(+price.value)

var dlt = document.querySelectorAll(".trash")
console.log(dlt)

var col=document.querySelectorAll(".heart")
console.log(col)


for (let i = 0; i < btnPls.length; i++) {
    btnPls[i].addEventListener("click" , ()=>{
        +(qte[i].value)++
        tot.value = +(tot.value) + (+price[i].value)

    })
    
}


for (let i = 0; i < minBtn.length; i++) {
    
        minBtn[i].addEventListener("click" , ()=>{
            if(+(qte[i].value) > 0) {
            +(qte[i].value)--
            }
            tot.value = +(tot.value) - (+price[i].value)
        })
    
    
    
}

for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click' , ()=>{
        dlt[i].parentElement.remove()
        /* update du total */
        tot.value = +tot.value - (+qte[i].value * +(price[i].value))
    })
    
}

for(let i = 0; i < col.length;i++){
    col[i].addEventListener('click', () => {
console.log((col[i].style.backgroundColor));

    if ((col[i].style.backgroundColor) != "red") {
        col[i].style.backgroundColor = "red";
    } else {
        col[i].style.backgroundColor = "white";
    }

    })}