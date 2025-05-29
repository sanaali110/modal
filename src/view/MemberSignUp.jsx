import { useState } from "react";

const MemberSignUp = ({onCancel}) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [location,setLocation] = useState("");
    const [uname,setName] = useState("");
    const [message,setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async(e) =>{
        e.preventDefault();

        //making a post call
        try{
           const response = await fetch("http://localhost:8080/signup",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({username,password,uname,location})
            }
           )
           const result = await response.text();
           console.log(result);
           if(response.ok){
            setMessage("Sign up succesful");
           }
           else{
            setMessage("Can't sign up right now!");
           }
        }catch(err){
            setError("Signup Failed");
            console.log(err);
        }
    }
    return(
        <div>
            <form>
                <input type="email" className="input-styles" placeholder="Enter your email" onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="text" className="input-styles" placeholder="Location" onChange={(e)=>setLocation(e.target.value)}></input>
                <input type="text" className="input-styles" placeholder="Name"  onChange={(e)=>setName(e.target.value)}></input>
                <input type="password" className="input-styles" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="button login-button" onClick={handleSignup}>Sign up</button>
                <button className="button" onClick={onCancel}>Cancel</button>
                {message && <p>{message}</p> }
            </form>
        </div>
    )
}

export default MemberSignUp