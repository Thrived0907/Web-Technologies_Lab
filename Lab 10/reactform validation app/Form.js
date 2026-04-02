import React, { useState } from "react";

function Form() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [error,setError]=useState({});

const validate=()=>{

let err={};

if(!name)
err.name="Name required";

if(!email)
err.email="Email required";
else if(!/\S+@\S+\.\S+/.test(email))
err.email="Invalid Email";

if(!password)
err.password="Password required";

setError(err);

return Object.keys(err).length===0;
};

const handleSubmit=(e)=>{
e.preventDefault();

if(validate()){
alert("Form Submitted");
setName("");
setEmail("");
setPassword("");
}
};

return(

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<p>{error.name}</p>

<input
type="text"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<p>{error.email}</p>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<p>{error.password}</p>

<button type="submit">Submit</button>

</form>

);
}

export default Form;