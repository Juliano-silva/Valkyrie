import React,{useState,useEffect} from "react";
import style from './style.module.css'
const List = ({items}) => {
    return(
        <div className="container">
            {items.map((item) => {
                const {id,title,user} = item;
                return(
                    <div key={id} className={style.TelaPrincipal}>
                            <h1>{user} falou: {title}</h1>
                    </div>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  } else{
    return [];
  }
}
const ApiInicial = () =>{
  const [name,setName] = useState("");
  const [user,setUser] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing,user && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){return {...item,title:name,user:user}}
          return item
        })
      );
      setName("");
      setUser("");
      setEditID(null);
      setIdEditing(false);
    }else{
      var UserID = localStorage.getItem("LoginSalvoUser")
    const newItem = {id: new Date().getTime().toString(),title:name,user:UserID};
      setList([...list,newItem]);
      setName("");
      setUser("");
    }
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
            <textarea type="text" placeholder="Comentário" onChange={(e) => setName(e.target.value)} value={name} />
            <button type="submit">
              {isEditing ? "Editar" : "Enviar"}
            </button>
        </form>
        {list.length > 0 && (
            <List items={list}/>
        )}
      </section>
    </div>
  )
}
export default ApiInicial
