import refs from "./refs.js"
import fetch from "./fetch.js"
import template from "../template/cocktail.hbs"

import debounce from "lodash.debounce"
import { data } from "autoprefixer"


refs.input.addEventListener('input', debounce((event) => {
    refs.list.innerHTML = ""
    fetch.search = event.target.value
    fetch.getFetch().then(data => {

        renderTemplate(data.drinks)

    })
   refs.input.value = ""
}, 1000))

function renderTemplate(data) {
    const drink = template(data)
        refs.list.insertAdjacentHTML('beforeend', drink)
       document.querySelectorAll('.ingredients li').forEach(el => {
            if (el.textContent === ``) {
                el.style.display = `none`
            }
        })
    
}



