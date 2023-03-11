import styleHeader from "../styles/styleHeader.js"

import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { Params } from "../helpers/Params.js"

import OpcListUser from "./OpcListUser.js"
import CreateElement from "../helpers/CreateElement.js"

const Header =async(auth)=>{
    if( !auth ) return 

    const dataUser = localStorage.getItem( 'user' )
    
    const [ , ruta = false  ] = Params()
    const [ user ] = dataUser ? JSON.parse( dataUser ) : await getData( srcApi( `get/datauser?token=${ localStorage.getItem( 'token' ) }` ) )

    localStorage.setItem( 'user', JSON.stringify( [ user ] ) )
 
    let element = null

    document.getElementById( 'styles' ).innerHTML += styleHeader()
    document.getElementById( 'root' ).prepend(
        element = CreateElement( 'header', { class:'header__zdckA' }, `
            <div class="div__u2JfF" >
                <button class="button__3wX3p" id="btnOpcUser" >
                    <span>${ user.email[0].toUpperCase() }</span>
                </button>
            </div>

            <div class="div__dVqJ0" >
                <a href="#notes/share" class="a__Y0D6O ${ ruta === 'share' ? 'focus' : '' }" >share</a>
                <a href="#notes/offline" class="a__Y0D6O ${ ruta === 'offline' ? 'focus' : '' }" >offline</a>
                <a href="#notes" class="a__Y0D6O ${ ruta === '' || !ruta ? 'focus' : '' }" >notes</a>
            </div>
        ` )
    ) 

    
    document.getElementById( 'btnOpcUser' ).addEventListener( 'click', OpcListUser )
}

export default Header