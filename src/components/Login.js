import React,{useState,useEffect} from 'react'
import style from './style.module.css'
function LoginSalvo(){
  window.location.reload()
  const User = document.getElementById("User").value
  const Image = document.getElementById("Image").value
  const Description = document.getElementById("Texto").value
  localStorage.setItem("LoginSalvoUser",User)
  localStorage.setItem("LoginSalvoImage",Image)
  localStorage.setItem("LoginSalvoDescription",Description)
}
var SalveUser = localStorage.getItem("LoginSalvoUser")
var SalveImage = localStorage.getItem("LoginSalvoImage")
var SalveDescri = localStorage.getItem("LoginSalvoDescription")
const List = ({items}) => {
  return(
    <div>
      <h1>Seu User é {SalveUser}</h1>
      <img src={SalveImage} alt="" />
      <p>{SalveDescri}</p>
    </div>
    )
}
const getLocalStorage = () => {
  let login = localStorage.getItem("login")
  if(login){
    return (login = JSON.parse(localStorage.getItem("login")))
  }else{
    return [];
  }
}
const Login = () => {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [textinho,setTextinho] = useState("")
  const [login,setLogin] = useState(getLocalStorage())
  const [editId,setEditID] = useState(null)
  const [isEditing,setIdEditing] = useState(false)
  useEffect(() => {
    localStorage.setItem("login",JSON.stringify(login));
  },[login])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing,image && isEditing,textinho && isEditing){
      setLogin(
        login.map((item) => {
          if (item.id === editId){return {...item,title:name,textinho:textinho,image:image}}
        })
        );
        setName("");
        setImage("");
        setTextinho("");
        setIdEditing(false);
    }else{
      const newItem = {id: new Date().getTime().toString(),title:name,textinho:textinho,image:image};
      setLogin([...login,newItem]);
      setName("");
      setImage("");
      setTextinho("");
    }
  };
  const clearList = () => {
    setLogin([]);
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input id='User' type="text" placeholder="Nome do Úsuario" onChange={(e) => setName(e.target.value)} value={name} />
            <input id='Image' type="text" placeholder="Image do Úsuario" onChange={(e) => setImage(e.target.value)} value={image} />
            <textarea id='Texto' placeholder='Descrição sobre o Úsuario' onChange={(e) => setTextinho(e.target.value)} value={textinho}></textarea>
            <button type="submit" onClick={LoginSalvo}>
              {isEditing ? "Editar" : "Enviar"}
            </button>
          </div>
        </form>
        {login.length > 0 && (
          <div>
            <List items={login} />
            <button onClick={clearList}>
            Apagar todos os itens
              </button>
          </div>
        )}
      </section>
    </div>
  )
}
export default Login
