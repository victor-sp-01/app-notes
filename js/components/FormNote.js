import styleFormNote from "../styles/styleFormNote.js"
import App from "../App.js"
import srcApi from "../helpers/srcApi.js"

import { Params, changeParam, pushParam } from "../helpers/Params.js"
import { getData, setData } from "../api/apiData.js"
import FormsData from "../helpers/FormsData.js"
import CreateElement from "../helpers/CreateElement.js"

import PageNotFound from "../pages/PageNotFound.js"

const FormNote =async( )=>{

    document.getElementById( 'styles' ).innerHTML += styleFormNote()
    document.getElementById( 'main' ).append( 
        CreateElement( 'div', { class:'div__OkY6P' }, `
            <span class="span__j6i6j" ></span>
        ` )
    ) 

    const token = localStorage.getItem( 'token' )

    const [ , typeForm = false, idNote = false ] = Params() 

    const Datas = {
        list    : JSON.parse( localStorage.getItem( 'listNoteOffline' )),
        list2   : [],
        data    : {
            id      : idNote ? idNote : `${ Date.now() }`,
            title   : '',
            details : ''
        }
    }
    
 
    if( typeForm === 'add' || typeForm === 'offline' ){ 
        if( !idNote ) changeParam( `#notes/add/${ Datas.data.id }` )

        const data  = JSON.parse( JSON.stringify( Datas.data ) )

        Datas.list2 = Datas.list.filter((data)=> data.id !== Datas.data.id && data )
        Datas.data  = Datas.list.filter((data)=> data.id === Datas.data.id && data ) 
        Datas.data = Datas.data.length === 0 ? [ data ] : Datas.data 
 
    } else if( typeForm === 'edit' ){ 
        Datas.data = await getData( srcApi( `get/notes/1/${ Datas.data.id }?token=${ localStorage.getItem('token') }` ) )
    } else if( typeForm === 'trash' ){ 
        Datas.data = await getData( srcApi( `get/notes/2/${ Datas.data.id }?token=${ localStorage.getItem('token') }` ) ) 
    } else if( typeForm === 'share' ){ 
        Datas.data = await getData( srcApi( `get/shareuser/${ Datas.data.id }?token=${ localStorage.getItem('token') }` ) ) 
    } else return PageNotFound( 'La Pagina no ha sido Econtrada' )

    const [ data = false ] = Datas.data 
    
    if( !data ) return PageNotFound( 'La nota no existe o ha sido borrada' )

    document.getElementById( 'main' ).innerHTML = `
        <form class="form__MM6GJ" >

            ${ typeForm === 'add' || typeForm === 'offline' ? '' : `<input type="text" name="id" value="${ data.id || '' }" hidden>` }

            <header class="header__I5mK3" >
                <button type="button" id="btnCancel" class="button__D0V7W" ><i class="fa-solid fa-arrow-left"></i></button>
                <input type="text" class="input__7sjAy" name="title" placeholder="titulo" spellcheck="false" >
                ${ typeForm === 'add' || typeForm === 'edit' || typeForm === 'offline' ? `<button type="submit" id="btnConfirm" class="button__D0V7W" ><i class="fa-solid fa-check"></i></button>` : '' }
            </header>
            
            <textarea class="textarea__1Qzbz" name="details" placeholder="escribar algo..." spellcheck="false" >${ data.details || '' }</textarea>
  
            ${ typeForm === 'add' || typeForm === 'offline' ? '' : `
                <div class="div__0spBV" >
                    <div class="div__bsJcV" >
                        ${ typeForm === 'edit' ? `
                            <button type="button" id="btnTrash" class="button__D0V7W" ><i class="fa-solid fa-trash-can-arrow-up"></i></button> 
                            <button type="button" id="btnLink" class="button__D0V7W" ><i class="fa-solid fa-link"></i></button> 
                            <button type="button" id="btnHide" class="button__D0V7W" ><i class="fa-solid fa-eye-slash"></i></button>
                        ` : '' }

                        ${ typeForm === 'trash' ? `
                            <button type="button" id="btnDelete" class="button__D0V7W" ><i class="fa-solid fa-trash"></i></button> 
                            <button type="button" id="btnRecover" class="button__D0V7W" ><i class="fa-solid fa-rotate-right"></i></button>
                        ` : '' }

                        ${ typeForm === 'share' ? `
                            <button type="button" id="btnUnLink" class="button__D0V7W" ><i class="fa-solid fa-link-slash"></i></button>   
                        `  : ''
                        }     
                    </div>
                </div>
            ` }
            
        </form>
    `
 
 
 
 
    const element = document.querySelector( '.form__MM6GJ' )

    element.title.value = data.title || ''
    element.title.focus()

    if( typeForm === 'trash' || typeForm === 'share' ) {
        element.title.readOnly = true 
        element.details.readOnly = true 
    }
 
    element.addEventListener( 'submit', (e)=>{
        e.preventDefault()    
 
        if( typeForm === 'trash' || typeForm === 'share' ) return

        const link = srcApi( `post/notes/${ typeForm === 'add' || typeForm === 'offline' ? 'add' : 'update' }?token=${ token }` )
        setData( new FormData( element ), link )
        .then( resp => resp && ( localStorage.setItem( 'listNoteOffline', JSON.stringify( Datas.list2 ) ), goBack()))
    } )

    element.addEventListener( 'click', ({ target })=>{
        
        if( target === element.btnCancel ) return goBack() 
        else if( target === element.btnTrash ) return setData( new FormData( FormsData( {id:data.id, status : '2' } ) ), srcApi( `post/notes/status?token=${ token }` ) )
            .then( resp => resp && goBack())
        else if( target === element.btnRecover ) return setData( new FormData( FormsData( {id:data.id, status : '1' } ) ), srcApi( `post/notes/status?token=${ token }` ) )
            .then( resp => resp && goBack())
        else if( target === element.btnDelete ) return setData( new FormData( element ), srcApi( `post/notes/delete?token=${ token }` ) )
            .then( resp => resp && goBack())
        else if( target === element.btnLink ) return setData( new FormData( element ), srcApi( `post/notes/share?token=${ token }` ) )
            .then( resp => resp && goBack()) 
        else if( target === element.btnUnLink ) return setData( new FormData( element ), srcApi( `post/share/delete?token=${ token }` ) )
            .then( resp => resp && goBack()) 

    }) 

    element.addEventListener( 'input', ()=>{
        if( typeForm === 'trash' || typeForm === 'share' ) return
        data.title = element.title.value
        data.details = element.details.value   

        localStorage.setItem( 'listNoteOffline', JSON.stringify( data.title === '' && data.details === '' ? Datas.list2 : [ ...Datas.list2, data ] ) )
    } )

    const goBack =()=> ( pushParam( '#notes' ), App() )
}

export default FormNote
 