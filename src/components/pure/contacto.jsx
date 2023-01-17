import React from "react";
import PropTypes from "prop-types";

const ContactoComponent = ({ nombre, apellido, email, estado }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h2>Apellido: {apellido}</h2>
      <h2>Email: {email}</h2>
      <h3>
        Estado:
        {estado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>
    </div>
  );
};

ContactoComponent.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  estado: PropTypes.bool,
};

export default ContactoComponent;
