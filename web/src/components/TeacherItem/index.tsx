import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/63420612?s=460&u=d32840d5f8bd9539aa905c494455682a0a10729e&v=4"
          alt="Eduardo Ferronato"
        />
        <div>
          <strong>Eduardo Ferronato</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das
        pessoas atraves de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
