import React from'react';
import style from '../css/sketest.module.scss';
const Sketest = () =>{
    const css = {
        height:"600px"
    }
    return (

        <div style={css} className={style.skeleton}></div>
    );
}

export default Sketest;