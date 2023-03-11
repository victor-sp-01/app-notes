import Header from "./components/Header.js"
import FlyBall from "./components/FlyBall.js"
import Routes from "./routes/Routes.js"
import Auth from "./auth/Auth.js"

import CreateElement from "./helpers/CreateElement.js"
const App =async()=>{
  
    const auth = await Auth() 

    document.getElementById( 'styles' ).textContent = ''
    document.getElementById( 'root' ).textContent = ''
    document.getElementById( 'root' ).append(
        CreateElement( 'main', { class: 'main', id:'main' } ),
    )
 
    auth && Header(auth)
    Routes(auth)
    auth && FlyBall(auth)

}

export default App