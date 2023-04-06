import React from 'react'
const ProjectID = () => {
  var url_atual = window.location.href;
  const url_modificar = url_atual.substring(32)
  const urlVerdadeira = parseInt(url_modificar)
  var id = JSON.parse(localStorage.ApiAdc)
  var title = JSON.stringify(id[urlVerdadeira].title).replace(/["]/g,'')
  var img = JSON.stringify(id[urlVerdadeira].image).replace(/["]/g,'')
  var description = JSON.stringify(id[urlVerdadeira].textinho).replace(/["]/g,'')
  return (
    <div>
    <div>
      <h1>Seu Nome é {title}</h1>
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
    </div>
  )
}
export default ProjectID
