import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
const Auth =async()=>{
    const token = localStorage.getItem( 'token' )
    if( !token ) return false

    const auth = await getData( srcApi( `token/verify?token=${ token }` ) )
    return auth ? auth : ( localStorage.removeItem( 'token' ), false )
}

export default Auth