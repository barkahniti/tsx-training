import {FC} from "react";
import { InputPasswordLabelSm, InputTextLabelSm } from "../../component/Input/Input";
import { Title2White } from "../../component/Label/Label";
import "./Login.css"

export const Login : FC  = () => {
    return (
        <>
            <div className="login-wrp">
                <div className="login-ctn">
                    <Title2White title="Login"/>
                    <div className="login-form">
                        <InputTextLabelSm id="email" value="email"/>
                        <InputPasswordLabelSm id="password" value="password"/>
                    </div>
                </div>
            </div>
        </>
    )
}