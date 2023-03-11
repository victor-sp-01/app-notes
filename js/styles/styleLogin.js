const styleLogin =()=>{
    return(`.div__kwxAo{
        background: #000000;
        position: fixed; inset: 0; display: flex;
        overflow-y: auto; padding: 20px;
    }   .div__kwxAo::-webkit-scrollbar{ display: none }
    
    .form__602XV{
        position: relative;
        margin: auto; 
    
        width: min( 100%, 425px );
        padding: 20px;
        border-radius: 5px;
    
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .title__bZa1V{
        text-align: center;
        color: #ffffff;
        font-size: 25px; font-weight: bold;
    }

    .label__UHfty{
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        cursor: text;
    }   
 
    .span__gpD3m{
        color: #ffffff;
    }
    
    .input__4ZO1I{
        position: relative;
        background: none;
        color: #ffffff;
        outline: none;
    
        border: 1.25px solid #ffffff;
        height: 1.25px;
        border-radius: 1.25px;
        padding: 0 15px;
        font-size: 16px; font-weight: bold;
    
        transition: all .3s ease-in-out;
    }   .input__4ZO1I:is(:focus, :valid){
            height: 50px;
            border-radius: 5px;
        }
        .input__4ZO1I:focus{ box-shadow: 0 0 10px 0 #ffffff; } 
        .input__4ZO1I.error{  animation: message .1s ease-in-out;  color: #b43030; border: 1.25px solid #b43030  }
        .input__4ZO1I.error{ color: #b43030; border: 1.25px solid #b43030 }  

    .span__0uBLC{
        width: 100%;
    
        color: #b43030;
        font-size: 13px; 
    
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: none;
        
    }   .span__0uBLC.error{ display:block }
         
    
    .div__fst1a{
        display: flex;
        justify-content: space-between;
    }
    
    .a__HKzGO{
        text-decoration: none;
        color: gray;
    }   .a__HKzGO:hover{ opacity: .8 }
    
    .a__g1IdQ{
        text-decoration: none;
        background: none;
        outline: none;
    
        color: #ffffff;
        font-size: 17px; font-weight: bold;
        cursor: pointer;
    }   .a__g1IdQ:hover{ opacity: .8 }
    
    .button__yv4SV{
        background: #ffffff;
        color: #000000;
    
        outline: none;
        border: none;
    
        width: 100%;
        height: 50px;
        border-radius: 5px;
    
        font-size: 16px; font-weight: bold;
        cursor: pointer;
    }   .button__yv4SV:hover{ opacity: .8 }


    .div__CfpYT{
        position: relative;
        background: #b43030; 
        width: 100%;
        height: 0;
        padding:  0 20px; gap: 20px;
        opacity: 0;
    
        display: flex; align-items: center;
        border-radius: 5px;
        overflow: hidden;
        transition: all .3s ease-in-out;
    }   .div__CfpYT.message{ opacity: 1; height: 50px; }
        .div__CfpYT.error{ animation: message .1s ease-in-out; }
    .span__BThGf{
        color: #ffffff;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .button__QgKFK{
        background: none;
        color: #ffffff;
    
        outline: none;
        border: none;
    
        cursor: pointer;
    }   .button__QgKFK:hover{ opacity: .8 }
    
    
    @keyframes message {
        0%,100%{
            left: -10px;
        }
        50%{
            left: 10px;
        }
    }
    
    `)
}

export default styleLogin