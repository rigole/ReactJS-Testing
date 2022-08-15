import React,{useState}  from "react";

function SignUpPage () {
    const [disabled, setDisabled] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')


    const onChangePassword = (event) =>{
         const currentValue = event.target.value
         setPassword(currentValue)
        if (currentValue == passwordRepeat){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }

        console.log(disabled)
    }



    const onChangePasswordRepeat = (event) =>{
        const currentValue = event.target.value;
       setPasswordRepeat(currentValue)

        if (currentValue == password){
            setDisabled(false)
        } else{
            setDisabled(true)
        }
        console.log(disabled)
    }

    /*setTimeout(() =>{
        console.log("Updating disabled")
        setDisabled(false)
    }, 1000);*/
        return (

            <div>
                <h1>Sign Up</h1>
                <label htmlFor="username">username</label>
                    <input type="text" placeholder="username"/>
                <label>Email</label>
                    <input type="email" placeholder="email"/>
                <label htmlFor="password">password</label>
                    <input id="password" type="password" onChange={onChangePassword}/>
                <label htmlFor="passwordRepeat">Password Repeat</label>
                    <input id="passwordRepeat" type="password" onChange={onChangePasswordRepeat}/>
                <button disabled={disabled}>Sign up</button>
            </div>
        )
}

export default SignUpPage