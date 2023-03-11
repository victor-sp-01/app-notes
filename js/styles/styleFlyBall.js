const styleFlyBall =()=>{
    return(`
        .div__QDtGf{
            position: fixed; z-index: 750; bottom: 30px; right: 30px;
            display: flex; align-items: center; flex-direction: column-reverse; gap: 15px;
            pointer-events: none;
        }
        
        .a__DNFCL{
            background: #ffffff;
            display: flex; justify-content: center; align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        
            text-decoration: none;
            color: #000000;
            font-size: 16px; font-weight: bold;
            pointer-events: initial;
        }   .a__DNFCL:hover{ opacity: .5; }
        
        .div__7EoH2{
            width: 40px;
            pointer-events: none;
        }
        
        .button__y5NYl{ 
            position: relative;
            background: #ffffff;
            color: #000000;
        
            display: flex; align-items: center;
            justify-content: center;
        
            width: 40px;
            height: 40px;
        
            border: none;
            border-radius: 50%;
            cursor: pointer;
        
            pointer-events: initial;
        
        }   .button__y5NYl:hover{ opacity: .5; }
    `)
}

export default styleFlyBall


