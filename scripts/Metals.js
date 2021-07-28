import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("metal")) {
            const [, metalId] = itemClicked.id.split("--")
            
            for (const metal of metals) {
             if(metal.id === parseInt(metalId)) {

             }   
            }
    }
}
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

