import React from 'react'
import styled from 'styled-components'
import Footer from '../footer/Footer'

function Registro() {
  return (
    <Reg>
        <div className="formulario">
        <h2>Registro</h2>
        <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellidos'/>
            <input type="date" name="" id="" />
            <input type="email" name="" id="" placeholder='Correo' />
            <input type="email" name="" id="" placeholder='Confirmar Correo' />
            <input type="password" name="" id="" placeholder='Contraceña' />
        </form>
        <a href="">Registrar</a>
        </div>
    </Reg>
  )
}

const Reg = styled.div` 
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    gap: 12px;
    height: 100vh;
    form{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    h2{
        color: aliceblue;
        font-size: 2rem;
    }
    .formulario{
        width: 30%;
        margin-top: 65px;
        height: auto;
        border-radius: 8px;
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 22px;
        background:linear-gradient(#6c6a6a,#2f2c3f);
        @media(max-width:778px){
            width: 40%;
            margin-top: 80px;
        }
        @media(max-width:525px){
            width: auto;

        }
    }
    input{
        border-radius: 5px;
        height: 32px;
        width: 250px;
        padding: 0 25px;
        @media(max-width:888px){
            width: auto;
        }
        @media(max-width:525px){
            width: auto;

        }
    }
    a{
        display: inline-block;
                outline: 0;
                text-decoration:none;
                cursor: pointer;
                border: 2px solid #000;
                border-radius: 3px;
                color: #fff;
                background: #000;
                font-size: 20px;
                font-weight: 600;
                line-height: 28px;
                padding: 12px 20px;
                text-align:center;
                transition-duration: .15s;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
                &:hover{
                    color: #000;
                    background: rgb(255, 218, 87);
                }
    }
    `

export default Registro