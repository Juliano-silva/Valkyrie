import React,{useState,useEffect} from 'react'
import style from './style.module.css'
const List = ({items}) => {
  return(
    <div>{items.map((item) => {
      const {id,title,image,textinho} = item;
      return(
        <div key={id} className={style.ListaLogin}>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>Descrição: {textinho}</p>
        </div>
        )
      })}
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
const ListLogin = () => {
  const [login,setList] = useState(getLocalStorage())
  useEffect(() => {
    localStorage.setItem("login",JSON.stringify(login));
  },[login])
  return(
    <div>
      <section>
        {login.length > 0 && (
          <div>
            <List items={login} />
          </div>
        )}
      </section>
    </div>
  )
}
export default ListLogin
