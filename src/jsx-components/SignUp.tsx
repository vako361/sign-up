import { StyledSignUp } from '../styled-components/styled'
import { Input } from '../styled-components/styled'
import { useState } from 'react'

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
return (
    <div>
        <StyledSignUp>
            <Input type="text" value={change.firstName} placeholder='First Name' onChange={(e) => setChange({...change, firstName: e.target.value})}/>
            <Input type="text" placeholder='Last Name' onChange={(e) => setChange({...change, lastName: e.target.value})}/>
            <Input type="email" placeholder='Email Address' onChange={(e) =>setChange({...change, mail: e.target.value})}/>
            <Input type="password" placeholder='Password' onChange={(e) => setChange({...change, password: e.target.value})} />
            <button onClick={handleSubmit} className='btn'>Claim your free trial</button>
            <p className='txt-wraper'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </StyledSignUp>
    </div>
);
}