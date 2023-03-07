const styleHeader =()=>{
    return(`
        .header__zdckA{
            background: #272727;
            position: sticky; z-index: 750; inset: 0; bottom: initial;
            width: 100%;
            height: 80px;
            padding: 0 30px;
            
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        
        .button__3wX3p{
            background: none;
            border: none;
            outline: none;
            overflow: hidden;
        
            width: auto;
            height: auto; 
        
            font-size: 18px;
            color: #ffffff;
            cursor: pointer;
        
            display: flex; gap: 10px;
        }   .button__3wX3p:hover{ opacity: .8; }
        
        .div__dVqJ0{
            display: flex; gap: 20px;
            justify-content: right;
        }
        
        .a__Y0D6O{
            color: #ffffff;
            text-decoration: none;
            font-size: 16px; font-weight: bold;
            opacity: .7;
        }   .a__Y0D6O:hover,
            .a__Y0D6O.focus{ opacity: 1 }
    `)
}
export default styleHeader