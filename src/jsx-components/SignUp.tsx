import { StyledSignUp } from '../styled-components/styled'
import { Input } from '../styled-components/styled'
import { useState } from 'react'
import { Error } from '../styled-components/styled'
export default function SignUp() {
    const [error, setError] = useState<{firstName:boolean;lastName:boolean;mail:boolean,password:boolean}>({
     firstName: false ,
     lastName: false,
     mail: false,
     password: false,
    })
    const [change, setChange] = useState<{firstName:string; lastName:string; mail:string; password:string}>({
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
})
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, mail, password } = change
    if (firstName.trim() === "") {
        setError((prev) => ({ ...prev, firstName: true }))
    }
    else if (lastName.trim() === "") {
        setError((prev) => ({ ...prev, lastName: true }))
    }
    else if (mail.trim() === "") {
        setError((prev) => ({ ...prev, mail: true }))
    }
    else if (password.trim() === "") {
        setError((prev) => ({ ...prev, password: true }))
    } 
    else if (!Mail.test(mail)) {
        setError((prev) => ({ ...prev, mail: true }))
    }
    else {
        setError({
            firstName: false,
            lastName: false,
            mail: false,
            password: false,
        })
        console.log("Form submitted successfully")
    }
};
const Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return (
    <div>
        <StyledSignUp>
            <Input  error={error.firstName} type="text" value={change.firstName} placeholder='First Name' onChange={(e) => {setChange({...change, firstName: e.target.value}); 
            setError({...error, firstName: false})}}/>
            {error.firstName && <Error>First Name cannot be empty</Error>}
            <Input  error={error.lastName} type="text" value={change.lastName} placeholder='Last Name' onChange={(e) => {setChange({...change, lastName: e.target.value});
            setError({...error, lastName: false}) }}/>
            {error.lastName && <Error>Last Name cannot be empty</Error>}
            <Input  
            error={error.mail} 
            type="email"
            value={change.mail} 
            placeholder='Email Address' 
            onChange={(e) => {setChange({...change, mail: e.target.value}); 
            setError({...error, mail: false});}}/>
            {error.mail && <Error>Looks like this is not an email</Error>}
            <Input 
                error={error.password}
                type="password" 
                value={change.password}
                placeholder='Password' 
                onChange={(e) => {setChange({...change, password: e.target.value}); 
                setError({...error, password: false})}} 
            />
            {error.password && <Error>Password cannot be empty</Error>}
            <button onClick={handleSubmit} className='btn'>Claim your free trial</button>
            <p className='txt-wraper'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </StyledSignUp>
    </div>
);
}