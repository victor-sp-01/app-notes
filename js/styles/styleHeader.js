const styleHeader =()=>{
    //button__3wX3p
    return(`
        .header__zdckA{
            background: #272727; 
            position: sticky; z-index: 750; inset: 0; bottom: initial;
            width: 100%;
            height: auto;
            padding: 20px; padding-right: 30px;
            
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }

        .div__u2JfF{
            display:flex;
        }
        
        .button__3wX3p{
            background: #ffffff;
            border: none;
            outline: none;
            overflow: hidden;
        
            width: 40px;
            height: 40px; 
            border-radius: 50%;
        
            font-size: 18px;
            color: #000000;
            cursor: pointer;

            font-size: 16px; font-weight: bold;
        
            display: flex; gap: 10px;
            align-items: center;
            justify-content: center;
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