import App from "./App.js";
addEventListener( 'DOMContentLoaded', App )
addEventListener( 'hashchange', App )

document.getElementById( 'root' ).addEventListener( 'contextmenu', e=> e.preventDefault() )