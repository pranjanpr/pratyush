import React,{useState} from 'react';
import {useTransition,animated} from 'react-spring';
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Test=()=>{
const [show, set] = useState(false)
const transitions = useTransition(show, null, {
from: { position: 'absolute', opacity: 0 },
enter: { opacity: 1 },
leave: { opacity: 0 },
})
return transitions.map(({ item, key, props }) =>
item && <animated.div key={key} style={props}>✌<FontAwesomeIcon size='2x' icon={faAngleDoubleDown} /></animated.div>
)

}


  export default Test;
