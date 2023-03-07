const stylesNotes =()=>{
    return(`
        .div__ul5jb{
            margin: auto;
            width: 100%;
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax( min( 100%, 400px ), 1fr ));
            gap: 20px;
        }
        
        .div__jKXJF{
            grid-column-start: 1;
            grid-column-end: -1;
            height: auto;  
            padding: 0 15px;
        
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        
            align-items: center;
        }
        
        .span__74cTb{
            font-size: 18px; font-weight: bold;
            color: #ffffff;
        
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
        } 
        
        .form__ZdG6w{
            position: relative;
            display: flex; justify-content: right;
            min-width: auto;
            gap: 15px;
        
        } 
        
        .div__tcdWP{
            background: #000000;
            position: absolute; z-index: 50; top: calc(100% + 10px); right:  0;
        
            display: none;
            padding: 10px; gap: 10px;
            border-radius: 5px;
            box-shadow: 0 0 5px 0 #ffffff;
        
        }   .div__tcdWP.on{ display: grid; }
        
        .button__2bhgH{
            background: none;
            outline: none;
            border: 1.25px solid #ffffff;
            border-radius: 30px;
            padding: 10px 30px;
            font-weight: bold;
            
            color: #ffffff;
            cursor: pointer;
        }   .button__2bhgH.focus{ background: #ffffff; color: #000000 }
            .button__2bhgH:hover{ opacity: .8; }
        
        
        .div__CpgtR{
            background: #000000;
            display: flex;
            position: relative;
            border-radius: 5px;
            height: 85px;
        
        }   .div__CpgtR:hover .div__5bdHS{ display: flex; }
        
        .a__LN29r{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            padding: 15px; gap: 5px;
            height: 85px;
        
            text-decoration: none;
            color: #fff;
            overflow: hidden;
        }   .a__LN29r p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 15px;
            }
            .a__LN29r:hover{ opacity: .5; }
        
        .div__KqDVr{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .span__R0jQ2{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 15px;
            font-size: 16px; font-weight: bold;
        }
        
        .span__BAXSK{
            font-size: 14px;
            text-align: right;
        
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        
        .div__5bdHS{
            
            position: relative; inset: 0; left: initial; width: auto;
            display: none; flex-direction: column; height: 100%; padding: 15px; padding-left: 0;
            overflow-y: auto;
        
        }   .div__5bdHS::-webkit-scrollbar{ display: none; }
        
        .button__0G8Zp{
            
            background: none;
            color: #ffffff;
        
            display: block;
            width: 30px; min-height: 30px;
        
            border: none;
            outline: none;
            
        
            cursor: pointer;
        }   .button__0G8Zp:hover{ opacity: .5; }
        
        
        
        .div__zIWP3{
            position: fixed; inset: 0; top: 70px;
            display: inline-flex; padding: 20px;
        }
        
        .div__lIgvB{
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        
        .message__UZjPt{ 
            width: 100%;
            color: #ffffff;
            text-align: center;
            font-size: 20px;
        }
        
        .a__HJiyj{
            background: #ffffff;
            color: #000000;
            border: 1.25px solid #ffffff;
        
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 15px; font-weight: bold;
            cursor: pointer;
        
            text-decoration: none;
        }   .a__HJiyj:hover{ opacity: .8; }
    `)
}

export default stylesNotes