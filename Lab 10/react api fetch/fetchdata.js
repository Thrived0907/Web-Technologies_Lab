import React,{useState,useEffect} from "react";

function FetchData(){

const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts")

.then(res=>res.json())

.then(result=>{
setData(result.slice(0,10));
setLoading(false);
})

.catch(err=>{
setError("Error fetching data");
setLoading(false);
});

},[]);

if(loading) return <p>Loading...</p>;

if(error) return <p>{error}</p>;

return(

<ul>

{data.map(item=>(
<li key={item.id}>
<b>{item.title}</b>
<p>{item.body}</p>
</li>
))}

</ul>

);

}

export default FetchData;