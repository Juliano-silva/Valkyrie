import React,{useState,useEffect} from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'
const List = ({items}) => {
  return(
    <div>
      {items.map((item) => {
      const {id,title} = item;
      return(
        <div key={id}>
            <Link to={"/ProjectID/"+id} className={style.LinkT}>{title}</Link>
        </div>
        )
      })}
    </div>
    )
}
const getLocalStorage = () => {
  let ApiAdc = localStorage.getItem("ApiAdc")
  let DadosApi = JSON.parse(localStorage.getItem("ApiAdc"))
  var Dados = JSON.stringify((parseInt(DadosApi.length)))
  var IDs = localStorage.setItem("NumDados",Dados)
  if(ApiAdc){
    return (ApiAdc = JSON.parse(localStorage.getItem("ApiAdc")))
  }else{
    return [];
  }
}
const Adicionar = () => {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [textinho,setTextinho] = useState("")
  const [ApiAdc,setApiAdc] = useState(getLocalStorage())
  const [editId,setEditID] = useState(null)
  const [isEditing,setIdEditing] = useState(false)
  useEffect(() => {
    localStorage.setItem("ApiAdc",JSON.stringify(ApiAdc));
  },[ApiAdc])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing,image && isEditing,textinho && isEditing){
      setApiAdc(
        ApiAdc.map((item) => {
          if (item.id === editId){return {...item,title:name,textinho:textinho,image:image}}
        })
        );
        setName("");
        setImage("");
        setTextinho("");
        setIdEditing(false);
    }else{
      const newItem = {id: localStorage.getItem("NumDados"),title:name,textinho:textinho,image:image};
      setApiAdc([...ApiAdc,newItem]);
      setName("");
      setImage("");
      setTextinho("");
    }
  };
  const clearList = () => {
    setApiAdc([]);
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input id='User' type="text" placeholder="Nome da pagina" onChange={(e) => setName(e.target.value)} value={name} />
            <input id='Image' type="text" placeholder="Image da pagina" onChange={(e) => setImage(e.target.value)} value={image} />
            <textarea id='Texto' placeholder='Descrição da página' onChange={(e) => setTextinho(e.target.value)} value={textinho}></textarea>
            <button type="submit">
              {isEditing ? "Editar" : "Enviar"}
            </button>
          </div>
        </form>
        {ApiAdc.length > 0 && (
          <div>
            <List items={ApiAdc} />
            <button onClick={clearList}>
                Apagar todos os itens
              </button>
          </div>
        )}
      </section>
    </div>
  )
}
export default Adicionar
