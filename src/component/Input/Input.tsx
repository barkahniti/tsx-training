import { faEye as EyeRegular } from "@fortawesome/free-regular-svg-icons";
import { faEye as EyeSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import './Input.css'

export const InputTextLabelSm : FC<{id:string,value:string,style?:React.CSSProperties}> = ({id,value,style}) => {
    return(
        <div className="input-class input-sm" style={style}>
            <input className="input-area" type={"text"} id={id} value={value}/>
        </div>
    )
}

export const InputPasswordLabelSm : FC<{id:string, value:string, style?:React.CSSProperties}> = ({id, value, style}) => {
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const handleShowIcon = ():void => {
        setShowIcon(!showIcon)
    }
    return(
        <div className="input-class input-sm" style={style}>
            <div className="icon-eye" onClick={handleShowIcon}>
                {showIcon ? <FontAwesomeIcon icon={EyeSolid} />:<FontAwesomeIcon icon={EyeRegular} />}
            </div>
            <input className="input-area" type={"text"} id={id} value={value}/>
        </div>
    )
}