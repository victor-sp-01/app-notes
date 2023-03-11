import styleFlyBall from "../styles/styleFlyBall.js"
import CreateElement from "../helpers/CreateElement.js"
 
const FlyBall =( auth )=>{
    if( !auth ) return

    let element = null
    document.getElementById( 'styles' ).innerHTML += styleFlyBall()
    document.getElementById( 'root' ).append(
        element = CreateElement( 'div', { class : 'div__QDtGf' }, `
            <a href="#notes/add" class="a__DNFCL" ><i class="fa-solid fa-plus"></i></a>
            ${ true ? '' : `
                <div class="div__7EoH2" >
                    <button class="button__y5NYl" id="btnLogout" ><i class="fa-solid fa-right-from-bracket"></i></button>
                </div>
            ` }
        ` )
    ) 
}

export default FlyBall


/*
    document.querySelector( '.button__DNFCL' ).addEventListener( 'click', ()=>{

        const element = document.querySelector( '.div__7EoH2' )
        if( element ) return root.removeChild( element )
 
        root.insertAdjacentHTML( 'beforeend', `
            <div class="div__7EoH2" >
                <a class="a__vy10x" ></a>
                <div class="div__QDtGf" >
                    
                    <a href="#notes/add" class="button__y5NYl" ><i class="fa-solid fa-file-circle-plus"></i></a>
                    <button class="button__y5NYl" id="btnLogout" ><i class="fa-solid fa-right-from-bracket"></i></button>

                    ${ false ? `<button class="button__y5NYl" ><i class="fa-solid fa-user"></i></button>` : '' }
                    ${ false ? `<button class="button__y5NYl" ><i class="fa-solid fa-gear"></i></button>` : '' }
                    
                </div>    
            </div>
        ` )


        document.querySelector( '.a__vy10x' ).addEventListener( 'click', ()=>  root.removeChild( document.querySelector( '.div__7EoH2' ) ) )

        document.querySelector( '.div__QDtGf' ).addEventListener( 'click', ( { target } )=> {
            //const element =( id )=> document.getElementById( id )
            if( target.id === 'btnLogout' ){
                getData( srcApi( `token/deactive?token=${ localStorage.getItem( 'token' ) }` ) )
                .then( resp => resp && (localStorage.removeItem( 'token' ), App()) )
            }
        } )
    })*/