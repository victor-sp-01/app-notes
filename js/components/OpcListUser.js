import styleOpcListUser from "../styles/styleOpcListUser.js"

import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"

import CreateElement from "../helpers/CreateElement.js"

const OpcListUser =async()=>{

    const [ user ] = await getData( srcApi( `get/datauser?token=${ localStorage.getItem( 'token' ) }` ) )

    const styles = document.getElementById( 'styles' )
    const style = styles.innerHTML
 
    styles.innerHTML += styleOpcListUser()

    const element = CreateElement( 'div', { class : 'div__L2lBe' } ,
        `
            <a class="a__g9Ss1" ></a>
            <div class="div__ubReX" >
                <div class="div__bMGjU" >
                    <a href="#user" class="a__C854s" > configuracion </a>
                    <a href="#notes/trash" class="a__C854s" > papelera </a>
                </div>
                <div class="div__AG3Eu" >
                    <a href="#user/${ user.id }" class="a__Tdzkh" > ${ user.email } </a>
                    <button class="button__Tdzkh" > logout </button>
                </div>
            </div>
        `
    )

    const root = document.getElementById( 'root' )
    root.append( element)
    
    document.querySelector( '.a__g9Ss1' ).addEventListener( 'click', ()=> (root.removeChild( element), styles.innerHTML = style ) )

    document.querySelector( '.button__Tdzkh' ).addEventListener( 'click', ()=>{
        getData( srcApi( `token/deactive?token=${ localStorage.getItem( 'token' ) }` ) )
        .then( resp => resp && (localStorage.clear(), sessionStorage.clear(), App()) )
    } )
}

export default OpcListUser
 