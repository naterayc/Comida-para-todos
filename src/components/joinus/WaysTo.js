import React, { useState } from "react";
import "./waysTo.css";
import Modal from "../modal/Modal";
import { Icon } from "@iconify/react";
import packageIcon from "@iconify/icons-feather/package";
import awardIcon from "@iconify/icons-feather/award";
import layersIcon from "@iconify/icons-feather/layers";
import coffeeIcon from "@iconify/icons-feather/coffee";
import toolTip from "../../img/Tool-Tip.png";
const JoinusHome = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="waysContainer">
      <div>
        <h4>TÚ PUEDES</h4>
        <h4>SER PARTE</h4>
      </div>
      <div className="waysItemContainer">
        <div className="lunch-container">
          <div>
            <div>
              <h3>
                <Icon icon={coffeeIcon} />1 ALMUERZO
              </h3>
              <p>
                Donando un almuerzo solidario podrás ser parte de esta gran red
                de ayuda en Chile y el mundo. Recuerda que no sólo es un plato
                de comida, es cariño y cuidado.
              </p>
            </div>
          </div>
          <div className="btn-container">
<<<<<<< HEAD
            <div>
              <span>
                <img src={toolTip} alt="tooltip-img" />
              </span>
              <a
                target="blank"
                href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"
              >
                <button type="button" className="waysto-donate-btn">
                  Donar
                </button>
              </a>
            </div>
=======
          <span><Icon icon={coffeeIcon} /></span>
            <button title="Texto flotante" type="button" className="waysto-donate-btn">
              Donar
            </button>
>>>>>>> d6a186f805c0ffeca21bdad4c9333237804a90e1
          </div>
        </div>
        <hr width="1" size="300"></hr>
        <div className="resources-container">
          <div>
            <div>
              <h3>
                <Icon icon={awardIcon} />
                TALENTO
              </h3>
              <p>
                El capital humano es lo más importante en Comida para Todos,
                puedes ser voluntario y donar tu tiempo y esfuerzo, sin duda
                estaremos agradecidos
              </p>
            </div>
            <div>
              <h3>
                <Icon icon={packageIcon} />
                MERCADERÍA
              </h3>
              <p>
                Promovemos la cultura de “cero desperdicio”, si tienes comida
                aún en buenas condiciones y que no usarás, con mucho gusto la
                recibiremos
              </p>
            </div>
            <div>
              <h3>
                <Icon icon={layersIcon} />
                M2 HUERTA
              </h3>
              <p>
                Creemos que la soberanía alimentaria desempeña un papel
                importante para combatir el hambre, por ello puedes donar m2
                para que contruyamos una huerta
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button type="button" className="contact-btn" onClick={openModal}>
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      {showModal === false ? null : <Modal close={closeModal} />}
    </div>
  );
};

export default JoinusHome;
