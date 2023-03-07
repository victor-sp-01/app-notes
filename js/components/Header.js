import styleHeader from "../styles/styleHeader.js"

import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { Params } from "../helpers/Params.js"

import OpcListUser from "./OpcListUser.js"
import CreateElement from "../helpers/CreateElement.js"

const Header =async(auth)=>{
    if( !auth ) return 

    const [ , ruta = false  ] = Params()
    const [ user ] = await getData( srcApi( `get/datauser?token=${ localStorage.getItem( 'token' ) }` ) )

    let element = null

    document.getElementById( 'styles' ).innerHTML += styleHeader()
    document.getElementById( 'root' ).prepend(
        element = CreateElement( 'header', { class:'header__zdckA' }, `
            <button class="button__3wX3p" id="btnOpcUser" >
                <i class="fa-solid fa-user"></i>
                <span>${ user.email }</span>
            </button>

            <div class="div__dVqJ0" >
                <a href="#notes/share" class="a__Y0D6O ${ ruta === 'share' ? 'focus' : '' }" >share</a>
                <a href="#notes/offline" class="a__Y0D6O ${ ruta === 'offline' ? 'focus' : '' }" >offline</a>
                <a href="#notes" class="a__Y0D6O ${ ruta === '' || !ruta ? 'focus' : '' }" >notes</a>
            </div>
        ` )
    ) 

    element.children.btnOpcUser.addEventListener( 'click', OpcListUser )
}

export default Header