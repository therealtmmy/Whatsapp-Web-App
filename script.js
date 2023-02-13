let textEl = document.getElementById("text")
let input = document.getElementById("inputEl")
let content = []

const clik = () => {
   content.push(input.value)
   input.value = " "
   render()
}

const render = () => {
    let listItems = " "
    for (let i = 0; i < content.length; i++){
        listItems += "<p>" + content[i] + "</p>"
        textEl.innerHTML = listItems
    }
}
