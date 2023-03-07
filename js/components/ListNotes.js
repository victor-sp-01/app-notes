import { dateUTCtoDateMonthCustom, dateUTCtoDateCustom, dateUTCtoDateYear, dateUTCtoDateCustomMonthDay, dateUTCtoDateLocalMonthDay } from "../functions/dates.js"

const ListNotes =async( ...data )=>{
    if( !localStorage.getItem( 'lstOrderNotes' ) ) localStorage.setItem( 'lstOrderNotes', 'month' )

    const [ type = normal, Datas = [] ] = data
    if( !Datas ) return
 
    const loadList =()=>{

        document.querySelector( '.div__ul5jb' ).innerHTML =  Datas.length === 0 ?  `
            <div class="div__zIWP3" >
                <div class="div__lIgvB" >
                    <h3 class="message__UZjPt" >lista vacia</h3>
                    <a href="#notes/add" class="a__HJiyj" >agregar nota</a>
                </div>  
            </div>
        ` 
        : 
            Datas.map( (data, index) => { 
 
                const order = localStorage.getItem( 'lstOrderNotes' )
                let currentDate = 0, previousDate = 0

                const date = Number(+data.id) ? data.id : data.dateUpdate
                const date2 = index === 0 ? date : Number(+Datas[ index - 1 ].id) ? Datas[ index - 1 ].id : Datas[ index - 1 ].dateUpdate

                if( order === 'year' ){
                    currentDate = dateUTCtoDateYear( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateYear( date2 )
                } else if( order === 'month' ){
                    currentDate = dateUTCtoDateMonthCustom( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateMonthCustom( date2 )
                } else if( order === 'day' ){
                    currentDate = dateUTCtoDateCustom( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateCustom( date2 )
                }   
 
                return(`
 
                    ${ index === 0 || currentDate !== previousDate ? 
                        `<div class="div__jKXJF">
                            <span class="span__74cTb" > ${ index === 0 && type !== 'normal' ? type.toUpperCase() + ' • ' : '' } ${ currentDate }</span>

                            ${ index === 0 ?
                                `
                                <form class="form__ZdG6w" >
                                    <button class="button__2bhgH focus" name="changeList" >${ order }</button>

                                    <div class="div__tcdWP" id="div__ueOiXlD" >
                                        ${ order === 'year' ? '' : `<button class="button__2bhgH" name="year" >year</button>` }
                                        ${ order === 'month' ? '' : `<button class="button__2bhgH" name="month" >month</button>` }
                                        ${ order === 'day' ? '' : `<button class="button__2bhgH" name="day" >day</button>` }

                                    </div> 
                                </form>
                                `
                                :
                                ''
                            }
                        </div>` 
                        : 
                        '' 
                    }

                    <div class="div__CpgtR" >
                        <a href="#notes/${ type === 'normal' ? 'edit' : type }/${ data.id || '' }" class="a__LN29r" >
                            <div class="div__KqDVr" >
                                <span class="span__R0jQ2" >${ data.title || '' }</span>
                                <span class="span__BAXSK" >${ order === 'year' ? dateUTCtoDateCustomMonthDay(date) : order === 'month' ? dateUTCtoDateLocalMonthDay(date) : '' || '' }</span>
                            </div>
                            <p>${ data.details || '' }</p>
                        </a>
                        <div class="div__5bdHS" >

                            ${ type === 'normal' ?
                                `
                                <button class="button__0G8Zp 9VPWK78yjzHU9As" data-id="${ data.id || '' }" ><i class="fa-solid fa-xmark"></i></button> 
                                <button class="button__0G8Zp SmJIYjsflWNhRlF" data-id="${ data.id || '' }" ><i class="fa-solid fa-link"></i></button>
                                `  
                                : type === 'offline' ?
                                `
                                <button class="button__0G8Zp LQjVMnI5R1aHOel" data-id="${ data.id || '' }" ><i class="fa-solid fa-trash"></i></button> 
                                <button class="button__0G8Zp f2mSHtoqBlWRnM4" data-id="${ data.id || '' }" ><i class="fa-solid fa-rotate"></i></button>
                                `
                                : type === 'trash' ?
                                `
                                <button class="button__0G8Zp 2rigYUdLsTd0Hxk" data-id="${ data.id || '' }" ><i class="fa-solid fa-trash"></i></button> 
                                <button class="button__0G8Zp dm5dPktlMe2pyO4" data-id="${ data.id || '' }" ><i class="fa-solid fa-rotate-right"></i></button>
                                `
                                : type === 'share' ?
                                `
                                <button class="button__0G8Zp xAizLHWHcEiFVk2" data-id="${ data.id || '' }" ><i class="fa-solid fa-link-slash"></i></button> 
                                `
                                : ''
                            }

                        </div>
                    </div>
                    `)
            }).join('')

            const element = document.querySelector( '.form__ZdG6w' )

            if( element ) element.addEventListener( 'click', (e)=>{
                e.preventDefault()

                if( e.target.tagName !== 'BUTTON' ) return false
                if( e.target === element.changeList ) return element.children.div__ueOiXlD.classList.toggle( 'on' )

                localStorage.setItem( 'lstOrderNotes', e.target.name )
                loadList()
            }) 

    };  loadList()

}

export default ListNotes