import React, { useState } from "react";
import "./HeroImgStyles.css";
import img from "../assets/1.png";
import { Link } from "react-router-dom";
import Modal from "./Portal/Modal";
import Modal1 from "./Portal/Modal";

const HeroImg = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="hero">
      <div className="mask">
        <img src={img} alt="..." className="into-img" />
      </div>
      <div className="content">
        <p>Pierwsza konstytucja w Europie</p>
        <h1>Konstytucja 3 Maja</h1>
        <div>
          <Link to="" className="btn btn-light" onClick={() => Toggle()}>
            Czytaj
          </Link>
          <Modal show={modal} close={Toggle} title="Oryginał">
            <p>
              Oryginał rękopiśmienny Konstytucji 3 maja początkowo był
              przechowywany w Wilanowie w zbiorach Archiwum Publicznego
              Potockich zgromadzonych przez Stanisława Kostkę Potockiego,
              uczestnika obrad Sejmu Czteroletniego. W latach 70. XIX wieku na
              mocy umów rodzinnych archiwum zostało przekazane do podkrakowskich
              Krzeszowic, a po 1945 roku powróciło do Warszawy i znalazło się w
              Archiwum Głównym Akt Dawnych.
            </p>
            <br />
            <p>
              <em>pamiecpolski.archiwa.gov.pl/konstytucja-3-maja-1791</em>
            </p>
          </Modal>
          <Link to="" className="btn" onClick={() => Toggle1()}>
            Więcej
          </Link>
          <Modal1 show={modal1} close={Toggle1} title="Nowoczesna Konstytucja">
            <p>
              Na jej podstawie przyjęto monteskiuszowski podział władz na
              prawodawczą, wykonawczą i sądowniczą, a także zniesiono m.in.
              liberum veto, konfederacje i wolną elekcję. Choć Konstytucja 3
              maja obowiązywała jedynie przez 14 miesięcy, była wielkim
              osiągnięciem narodu polskiego chcącego zachować niezależność
              państwową oraz zapewnić możliwość rozwoju gospodarczego i
              politycznego kraju.
            </p>
            <br />
            <p>
              <em>pamiecpolski.archiwa.gov.pl/konstytucja-3-maja-1791</em>
            </p>
          </Modal1>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
