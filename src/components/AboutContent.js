import React, { useState } from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import img from "../assets/7.png";
import img1 from "../assets/24.png";
import Modal from "./Portal/Modal";

const AboutContent = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="about">
      <div className="left">
        <h2>Obalenie Konstytucji</h2>
        <p>
          Ustawa została obalona przez konfederację targowicką popieraną przez
          Rosję, w wyniku interwencji wojsk rosyjskich w czasie wojny
          polsko-rosyjskiej w 1792 roku.
        </p>
        <Link to="" onClick={() => Toggle()}>
          <button className="btn">Więcej</button>
        </Link>
        <Modal
          show={modal}
          close={Toggle}
          title="Konstytucja 3 maja cierniem w oku sąsiadów"
        >
          <p>
            O tym jak groźna była konstytucja dla mocarstw chcących zguby
            Polski, najlepiej świadczą słowa pruskiego dyplomaty Augusta Goltza,
            który stwierdził, że: „Polska dobrze rządzona może stać się
            niebezpieczną, a nawet zgubną dla Prus”. Ostatecznie rosyjska caryca
            wykorzystując polskich zdrajców, którzy zawiązali konfederację
            targowicką, podjęła interwencję w Polsce. W efekcie wybuchła wojna
            polsko-rosyjska, która zakończyła się II rozbiorem Polski. Tym samym
            doszło do obalenia Konstytucji 3 maja i przywrócenia poprzedniego
            ustroju państwa.
          </p>
          <br />
          <p>
            <em>historia.org.pl/2021/05/02/</em>
          </p>
        </Modal>
      </div>
      <div className="right">
        <div className="img-container">
          {/* <div className="img-stack top">
            <img src={img} alt="..." className="img" />
          </div> */}
          <div className="img-stack bottom">
            <img src={img1} alt="..." className="img" />
            <p>
              Stanisław Szczęsny (zdrajca) - polski polityk o orientacji
              prorosyjskiej
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
