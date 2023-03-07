const styleOpcListUser =()=>{
    return(`
        .div__L2lBe{
            backdrop-filter: blur( 2.5px );
            position: fixed; z-index: 999; inset: 0;
            display: flex; align-items: flex-end; justify-content: center;
            padding: 20px;
        }
        
        .a__g9Ss1{
            position: fixed; inset: 0;
            cursor: pointer;
        }
        
        .div__ubReX{
            position: relative;
            background: #ffffff;
            width: min( 100%, 425px );
            height: auto; max-height: 400px;
            border-radius: 5px;
        
            display: flex;
            flex-direction: column;
        }
        
        .div__bMGjU{
            width: 100%;
            height: 100%;
        
            overflow-y: auto;
        }   .div__bMGjU::-webkit-scrollbar{ display: none; }
        
        .a__C854s{
            display: block;
            width: 100%;
            padding: 20px;
        
            text-decoration: none;
            color: #000000;
            font-size: 16px; font-weight: bold;
        }   .a__C854s:hover{ background: rgb(181 178 178 / .1); }
        
        .div__AG3Eu{
            width: 100%;
            display: flex; gap: 20px;
            padding: 20px;
        }
        
        .a__Tdzkh{
            display: block;
            width: 100%;
        
            padding: 10px 30px;
            border: 1.25px solid #000000;
            border-radius: 30px;
        
            overflow: hidden; 
            text-overflow: ellipsis;
            white-space: nowrap;
        
            text-decoration: none;
            color: #000000;
            font-size: 16px; font-weight: bold;
        }
        
        .button__Tdzkh{
            background: #000000;
            color: #ffffff;
            min-width: auto;
        
            padding: 10px 30px;
            border: 1.25px solid #000000;
            border-radius: 30px;
        
            cursor: pointer;
            font-size: 15px; font-weight: bold;
        }
        
        .a__Tdzkh:hover,
        .button__Tdzkh:hover{ opacity: .8 }
    `)
}

export default styleOpcListUser