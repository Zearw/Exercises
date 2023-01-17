import React from "react";
import ContactoComponent from "./pure/contacto";

const ContactoList = () => {
  return (
    <div>
      <ContactoComponent
        nombre={"Sofia"}
        apellido={"Example"}
        email={"sofia@gmail.com "}
        estado={true}
      />
    </div>
  );
};

export default ContactoList;
