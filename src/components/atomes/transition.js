import {useTransition, animated} from 'react-spring'
import React, {useState} from "react";


const Transition = (props) => {
    const [show, setShow] = useState(false);

    const transitions = useTransition(props.items, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        reverse: show,
    });

    return transitions(
        (styles, item) => item && <animated.div style={styles}>{props.children}</animated.div>
    );
};

export default Transition;