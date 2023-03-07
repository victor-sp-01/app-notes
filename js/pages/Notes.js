import stylesNotes from "../styles/stylesNotes.js"

import { Params } from "../helpers/Params.js"
import { setData, getData } from "../api/apiData.js"
import srcApi from "../helpers/srcApi.js"

import FormsData from "../helpers/FormsData.js"
import CreateElement from "../helpers/CreateElement.js"

import ListNotes from "../components/ListNotes.js"

const Notes =()=>{ 

    const ruta = Params()[1]
    let element
    let element2

    document.getElementById( 'styles' ).innerHTML += stylesNotes()
    document.getElementById( 'main' ).append( 
        element = CreateElement( 'div', { class:'div__ul5jb' } ),
        element2 = CreateElement( 'div', { class:'div__OkY6P' }, `
            <span class="span__j6i6j" ></span>
        ` )
    ) 

    if( !localStorage.getItem( 'listNoteOffline' ) ) 
        localStorage.setItem( 'listNoteOffline', JSON.stringify([]) )

    const loadListNormal =()=>{

        const loadList = async ()=>{
            const data = await getData( srcApi( `get/notes/1?token=${ localStorage.getItem( 'token' ) }` ) )
            document.getElementById( 'main' ).removeChild( element2 )
            ListNotes( 'normal', data )
            
        }

        element.addEventListener( 'click', ({ target })=>{
            if( target.classList.contains('9VPWK78yjzHU9As') ) {

                const data = new FormData( FormsData( { id : target.dataset.id, status : '2' } ) ) 
                const link = srcApi( `post/notes/status?token=${ localStorage.getItem( 'token' ) }` )
    
                return setData( data, link ) .then( resp => resp && loadList() )
            }

            if( target.classList.contains('SmJIYjsflWNhRlF') ) {

                const data = new FormData( FormsData( { id : target.dataset.id } ) ) 
                const link = srcApi( `post/notes/share?token=${ localStorage.getItem( 'token' ) }` )
    
                return setData( data, link ) .then( resp => console.log( resp ) )
            }
        })

        loadList() 
    }

    const loadListOffline =()=>{

        const loadList = ()=>{
            const data = JSON.parse( localStorage.getItem( 'listNoteOffline' ) )
            document.getElementById( 'main' ).removeChild( element2 )

            ListNotes( ruta, data )
        }

        element.addEventListener( 'click', ({ target })=>{
            
            const listOff = JSON.parse( localStorage.getItem( 'listNoteOffline' ) ).filter( data => data.id !== target.dataset.id && data )
            const [ data ] = JSON.parse( localStorage.getItem( 'listNoteOffline' ) ).filter( data => data.id === target.dataset.id && data )

            if( target.classList.contains('LQjVMnI5R1aHOel') ) {
                return ( localStorage.setItem( 'listNoteOffline', JSON.stringify( listOff ) ), loadList() )
            }

            if( target.classList.contains('f2mSHtoqBlWRnM4') ) {
                delete data.id  
                return setData( new FormData( FormsData( data ) ), srcApi( `post/notes/add?token=${ localStorage.getItem( 'token' ) }` ) )
                .then( resp => resp && ( localStorage.setItem( 'listNoteOffline', JSON.stringify( listOff ) ), loadList()))
            }
        })

        loadList()
    }

    const loadListTrash =()=>{

        const loadList = async ()=>{
            const data = await getData( srcApi( `get/notes/2?token=${ localStorage.getItem( 'token' ) }` ) )
            document.getElementById( 'main' ).removeChild( element2 )

            ListNotes( ruta, data )
        }

        element.addEventListener( 'click', ({ target })=>{
            if( target.classList.contains('2rigYUdLsTd0Hxk') ) {

                const data = new FormData( FormsData( { id : target.dataset.id } ) ) 
                const link = srcApi( `post/notes/delete?token=${ localStorage.getItem( 'token' ) }` )
    
                return setData( data, link ) .then( resp => resp && loadList() )
            }

            if( target.classList.contains('dm5dPktlMe2pyO4') ) {

                const data = new FormData( FormsData( { id : target.dataset.id, status : '1' } ) ) 
                const link = srcApi( `post/notes/status?token=${ localStorage.getItem( 'token' ) }` )
    
                return setData( data, link ) .then( resp => resp && loadList() )
            }
        })

        loadList()
    }


    const loadListShare =()=>{

        const loadList = async ()=>{
            const data = await getData( srcApi( `get/shareuser?token=${ localStorage.getItem( 'token' ) }` ) )
            document.getElementById( 'main' ).removeChild( element2 )

            ListNotes( ruta, data )
        }

        element.addEventListener( 'click', ({ target })=>{
            if( target.classList.contains('xAizLHWHcEiFVk2') ) {

                const data = new FormData( FormsData( { id : target.dataset.id } ) ) 
                const link = srcApi( `post/share/delete?token=${ localStorage.getItem( 'token' ) }` )
    
                return setData( data, link ) .then( resp => resp && loadList() )
            }
        })

        loadList()
    }


    
    if( ruta === 'offline' ) return loadListOffline()
    if( ruta === 'trash' ) return loadListTrash()
    if( ruta === 'share' ) return loadListShare()


    loadListNormal()
}
export default Notes
 