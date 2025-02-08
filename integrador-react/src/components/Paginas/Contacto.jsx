import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Contacto = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .required("El nombre es obligatorio"),
    apellido: Yup.string()
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El email es obligatorio"),
    asunto: Yup.string()
      .min(5, "El asunto debe tener al menos 5 caracteres")
      .required("El asunto es obligatorio"),
  });

  return (
  <ContactContainer>
    <ContactCard>
      <h2>Contacto</h2>
      <Formik
        initialValues={{ nombre: "", apellido: "", email: "", asunto: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            resetForm();
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <label>Nombre:</label>
              <Field type="text" name="nombre" />
              <ErrorMessage name="nombre" component="div" className="error" />
            </FormGroup>
            <FormGroup>
              <label>Apellido:</label>
              <Field type="text" name="apellido" />
              <ErrorMessage name="apellido" component="div" className="error" />
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </FormGroup>
            <FormGroup>
              <label>Asunto:</label>
              <Field as="textarea" name="asunto" />
              <ErrorMessage name="asunto" component="div" className="error" />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>Enviar</SubmitButton>
          </Form>
        )}
      </Formik>
      {formSubmitted && <SuccessMessage>¡Formulario enviado con éxito!</SuccessMessage>}
    </ContactCard>
    </ContactContainer> 
  );
};

const ContactContainer = styled.div`
 width: 100%;
 height: 100vh;
 justify-content: center;
 align-items: center;
 display: flex;
 color: #fff;
`;
const ContactCard = styled.div`
  width:400px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(#2b292a,#191b20);
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


const FormGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    font-weight: bold;
  }
  input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .error {
    color: red;
    font-size: 0.875em;
  }
  .contactCard{
  max-width:500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #ccc;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  font-weight: bold;
`;

export default Contacto;