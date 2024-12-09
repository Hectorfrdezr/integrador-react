import React from 'react'
import styled from 'styled-components'
import { FaFacebook,FaWhatsapp,FaInstagramSquare} from "react-icons/fa";
let link =``

function Footer() {
  return (
    <Pie>
      <div className="footer-info">
        <div className="footer-links">
        <p>© 2024 El buen Sabor. Todos los derechos reservados.</p>
          <div className="likns">
          <a href={link} className='social'><FaFacebook/></a>
          <a href={link} className='social'><FaWhatsapp/></a>
          <a href={link} className='social'><FaInstagramSquare/></a>
          </div>
        </div>
      </div>
    </Pie>
  )
}
const Pie = styled.div`
.footer-info{
  display: flex;
  width: 100%;
  margin-top: 1rem;
  background-color: #141619;
  justify-content: center;
  align-items: center;
}
.footer-links{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p{
  color: aliceblue;
  font-size: 1rem;
  padding: 1rem;
  @media(max-width:625px){
        font-size: 12px;
      }
      @media(max-width:425px){
       font-size: 8px;
      }
}
a{
  color: aliceblue;
  font-size: 18px;
  margin-right: 8px;
  &:hover{
    color: #fcda30;
  }
}


`
export default Footer
