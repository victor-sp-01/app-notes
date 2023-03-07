const styleFormNote =()=>{
    return(`
        .form__MM6GJ{
            background: #000;
            position: fixed; z-index: 999; inset: 0;
        
            display: flex; flex-direction: column;
        }
        
        
        .header__I5mK3{ 
            display: flex; align-items: center; padding: 0 20px;
        }
        
        .input__7sjAy,
        .textarea__1Qzbz{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        
            background: none;
            outline: none;
            border: none;
        
            width: 100%;
            padding: 0 20px;
            color: #ffffff;
        }
        
        .input__7sjAy{
            height: 65px;
            font-size: 20px; font-weight: bold;
            
        }
        
        .textarea__1Qzbz{ 
            resize: none;
            height: 100%;
            font-size: 16px;
            padding-bottom: 20px;
        }   .textarea__1Qzbz::-webkit-scrollbar{ display: none }
        
        .div__0spBV{
            width: 100%;
            height: 65px;
            gap: 20px;
            padding: 0 20px;
                
            display: flex; 
            align-items: center;
        }
        
        .div__uQ5vf{
            display: flex; 
            width: 100%;
        }
        
        .div__bsJcV{
            margin: auto;
            display: flex; 
            gap: 20px;
        }
        
        .button__D0V7W{
            background: none;
            color: #ffffff;
            font-size: 16px;
            outline: none;
            border: none;
        
            cursor: pointer;
        }   .button__D0V7W:hover{ opacity: .5; }
        
        .button__ItZsl{
            background: #ffffff;
            padding: 10px 30px;
        
            border: none;
            border-radius: 30px;
        
            font-size: 16px; font-weight: bold;
            color: #000000;
        
            cursor: pointer;
        }   .button__ItZsl:hover{ opacity: .8 }
    `)
}

export default styleFormNote