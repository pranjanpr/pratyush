import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops'


const Toggle=()=>{
    const [isToggled,setToggle]=useState(false)
const  fade=useSpring({
    //opacity: isToggled?1:0.5,
    fontSize:isToggled?'2rem':'10em',
    color:isToggled?'tomato':'green',

})
const props = useSpring({ number: 1, from: { number: 0 } })




    return (
        <div >
        <h1 ><animated.span>{props.number}</animated.span></h1>
        <button onClick={()=>setToggle(!isToggled)}>Toggle</button>
        
        </div>
    )
}
export default Toggle;