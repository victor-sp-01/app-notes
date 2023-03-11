const PageNotFound =( message = '' )=>{
    document.getElementById( 'root' ).innerHTML = `
        <div class="div__AtdNo" >
            <div class="div__WpXep" >
                <h3 class="h3__v9PKI" >${ message }</h3> 
                <a href="#" class="a__ktXEp" >Ir A Inicio</a> 
            </div> 
        </div>
    `
}

export default PageNotFound