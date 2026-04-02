import React,{useState} from "react";

function List(){

const [items,setItems]=useState([]);
const [text,setText]=useState("");

const addItem=()=>{

if(text==="") return;

setItems([...items,{id:Date.now(),name:text}]);
setText("");

};

const removeItem=(id)=>{
setItems(items.filter(item=>item.id!==id));
};

return(

<div>

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Enter item"
/>

<button onClick={addItem}>Add</button>

{items.length===0 ? (

<p>No Items</p>

):(

<ul>

{items.map(item=>(
<li key={item.id}>
{item.name}
<button onClick={()=>removeItem(item.id)}>Remove</button>
</li>
))}

</ul>

)}

</div>

);

}

export default List;