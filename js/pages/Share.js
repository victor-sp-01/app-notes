import styleFormNote from "../styles/styleFormNote.js"

import { Params } from "../helpers/Params.js"
import { getData } from "../api/apiData.js"
import srcApi from "../helpers/srcApi.js"
import PageNotFound from "./PageNotFound.js"


const Share =async()=>{
    const params = Params()
    const [ data ] = await getData( srcApi( `get/share/${ params[1] }` ) )

    if( !data ) return PageNotFound( 'Nota no econtrada' )

    document.getElementById( 'styles' ).innerHTML += styleFormNote()
    document.getElementById( 'main' ).innerHTML = `
        <form class="form__MM6GJ" >
            <input type="text" class="input__7sjAy" name="title" placeholder="titulo" spellcheck="false" >
            <textarea class="textarea__1Qzbz" name="details" placeholder="escribar algo..." spellcheck="false" >${ data.details || '' }</textarea>
        </form>
    `

    const element = document.querySelector( '.form__MM6GJ' )

    element.title.value = data.title || ''
    element.title.readOnly = true 
    element.details.readOnly = true 

    element.addEventListener( 'submit', e=> e.preventDefault() )
}
export default Share