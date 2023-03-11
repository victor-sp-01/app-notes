import stylesNotes from "../styles/stylesNotes.js"

import { Params } from "../helpers/Params.js"
import { setData, getData } from "../api/apiData.js"
import srcApi from "../helpers/srcApi.js"

import FormsData from "../helpers/FormsData.js"
import CreateElement from "../helpers/CreateElement.js"

import ListNotes from "../components/ListNotes.js"

const Notes =()=>{ 

    const ruta = Params()[1]
    const Element = {
        lst     : '',
        load    : ''
    }

    let load = true 

    document.getElementById( 'styles' ).innerHTML += stylesNotes()
    document.getElementById( 'main' ).append( 
        Element.lst     = CreateElement( 'div', { class:'div__ul5jb' } ),
        Element.load    = CreateElement( 'div', { class:'div__OkY6P' }, `
            <span class="span__j6i6j" ></span>
        ` )
    ) 

    if( !localStorage.getItem( 'lstNotes' ) ) localStorage.setItem( 'lstNotes', JSON.stringify( { normal : false, trash : false, share : false, offline : [] } ) )
 
    const loadListNormal =()=>{

        const loadList = async()=>{

            const { normal } = JSON.parse( localStorage.getItem( 'lstNotes' ) )  

            if( normal ) {
                if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
                ListNotes( 'normal', normal )
            }

            const data = await getData( srcApi( `get/notes/1?token=${ localStorage.getItem( 'token' ) }` ) )
            if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
            
 
            if( JSON.stringify( normal ) !== JSON.stringify( data )  ){
                const lst = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 
                lst.normal = data 

                localStorage.setItem( 'lstNotes', JSON.stringify( lst ) )
                ListNotes( 'normal', data ) 
            } 
        }


        Element.lst.addEventListener( 'click', ({ target })=>{
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

            const { offline } = JSON.parse( localStorage.getItem( 'lstNotes' ) )
            if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
            ListNotes( ruta, offline ) 

        }

        Element.lst.addEventListener( 'click', ({ target })=>{

            const Datas = JSON.parse( localStorage.getItem( 'lstNotes' ) )
            const { offline } = Datas
            const lst       = offline.filter( data => data.id !== target.dataset.id && data )
            const [ data ]  = offline.filter( data => data.id === target.dataset.id && data )

            if( target.classList.contains('LQjVMnI5R1aHOel') ) {
                Datas.offline = lst
                localStorage.setItem( 'lstNotes', JSON.stringify( Datas ))
                return loadList()
            }

            if( target.classList.contains('f2mSHtoqBlWRnM4') ) {
                Datas.offline = lst
                delete data.id  
                return setData( new FormData( FormsData( data ) ), srcApi( `post/notes/add?token=${ localStorage.getItem( 'token' ) }` ) )
                .then( resp => resp && ( localStorage.setItem( 'lstNotes', JSON.stringify( Datas )), loadList()))
            }

        })

        loadList()
    }

    const loadListTrash =()=>{

        const loadList = async ()=>{
            const { trash } = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 

            if( trash ) {
                if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
                ListNotes( ruta, trash )
            }

            const data = await getData( srcApi( `get/notes/2?token=${ localStorage.getItem( 'token' ) }` ) )
            if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
            
            if( JSON.stringify( trash ) !== JSON.stringify( data )  ){
                const lst = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 
                lst.trash = data 

                localStorage.setItem( 'lstNotes', JSON.stringify( lst ) )
                ListNotes( ruta, data ) 
            }
        }

        Element.lst.addEventListener( 'click', ({ target })=>{
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

            const { share } = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 

            if( share ) {
                if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
                ListNotes( ruta, share )
            }

            const data = await getData( srcApi( `get/shareuser?token=${ localStorage.getItem( 'token' ) }` ) )
            if( load ) ( document.getElementById( 'main' ).removeChild( Element.load ), load = false )
            
            if( JSON.stringify( share ) !== JSON.stringify( data )  ){
                const lst = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 
                lst.share = data 

                localStorage.setItem( 'lstNotes', JSON.stringify( lst ) )
                ListNotes( ruta, data ) 
            } 
        }

        Element.lst.addEventListener( 'click', ({ target })=>{
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
 