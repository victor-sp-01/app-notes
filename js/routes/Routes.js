import { Params, changeParam } from "../helpers/Params.js"
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
import Notes from "../pages/Notes.js"
import FormNote from "../components/FormNote.js"
import Share from "../pages/Share.js"

import PageNotFound from "../pages/PageNotFound.js"


const Routes =( auth )=>{
    const rPrivate  =( page )=> auth ? page() : ( changeParam( '#login' ), Login()) 
    const rPublic   =( page )=> auth ? ( changeParam( '#notes' ), Notes()) : page()

    const rPrivate2  =()=> ( changeParam( '#login' ), Login())
    const rPublic2   =()=> ( changeParam( '#notes' ), Notes())

    const [ ruta = false, ruta2 = false, ruta3 = false ] = Params()

    if( !ruta || ruta === '' || ruta === 'inicio' ) return auth ? Notes() : Login()
    if( ruta === 'login' ) return rPublic( Login )
    if( ruta === 'register' ) return rPublic( Register )
    if( ruta === 'notes' ){
        if( !auth ) return rPrivate2()
        if( ruta2 === 'add' ) return FormNote( )
        if( ruta3 ) return FormNote()
        return Notes()
        //if( ruta2 === 'edit' ) return FormNote( false )
        //if( ruta2 === 'add' ) return FormNote()
    }
    if( ruta === 'share' ) return Share()
    else return PageNotFound('La Pagina no ha sido Econtrada') 
}

export default Routes