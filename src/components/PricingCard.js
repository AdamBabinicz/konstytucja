import React, { useState } from "react";
import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import { GiAngelWings, GiAngelOutfit, GiDevilMask } from "react-icons/gi";
import Modal from "./Portal/Modal";
import Modal1 from "./Portal/Modal";
import Modal2 from "./Portal/Modal";

const PricingCard = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);

  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Wprowadzono -</h3>
          <span className="bar"></span>
          <p className="btc">
            <GiAngelWings />
          </p>
          <p>- ustrój monarchii konstytucyjnej -</p>
          <p>- trzystopniowy podział władzy -</p>
          <p>- Sejm miał być zwoływany co dwa lata -</p>
          <p>
            - ograniczenie immunitetów prawnych oraz przywileje szlachty
            zagrodowej -
          </p>
          <Link to="" className="btn" onClick={() => Toggle()}>
            Czytaj
          </Link>
          <Modal
            show={modal}
            close={Toggle}
            title="Następstwo tronu w Konstytucji 3 maja"
          >
            <p>
              Drażliwą dla szlachty kwestię następstwa tronu wprowadza zdanie:
              „Tron polski elekcyjnym przez familie mieć na zawsze chcemy i
              stanowimy”. „Najstarszy syn króla panującego po ojcu na tron
              następować ma”. Nie ma tu najmniejszej nawet wzmianki o
              jakiejkolwiek elekcyjności, co więcej, ta lapidarna fraza opisuje
              najbardziej klasyczną i najprostszą formę niczym nieskażonej
              dziedziczności tronu.
            </p>
            <br />
            <p>
              <em>
                www.wilanow-palac.pl/nastepstwo_tronu_w_konstytucji_3_maja.html
              </em>
            </p>
          </Modal>
        </div>
        <div className="card">
          <h3>- Zachowano -</h3>
          <span className="bar"></span>
          <p className="btc">
            <GiAngelOutfit />
          </p>
          <p>- stanową strukturę społeczeństwa -</p>
          <p>
            - przywileje mieszczańskie nadane w akcie prawnym z 18 kwietnia 1791
            roku -
          </p>
          <p>
            - dawała miastom prawo do wysłania na Sejm 24 plenipotentów jako
            swoich przedstawicieli -
          </p>
          <Link to="" className="btn" onClick={() => Toggle1()}>
            Czytaj
          </Link>
          <Modal1 show={modal1} close={Toggle1} title="Ustrój społeczny">
            <p>
              Konstytucja utrzymała uprzywilejowaną pozycję szlachty w życiu
              publicznym, wypływającą z danych praw, które zostały potwierdzone.
              Nade wszystko jednak gwarantowała „bezpieczeństwo osobiste,
              wolność osobistą i własność gruntową”, które „świątobliwie i
              nienaruszalnie” miały zostać zachowane. W stylizacji tego
              sformułowania przebija wyraźnie koncepcja „niepozbywalnych i
              świętych” praw, które upowszechniła wówczas francuska Deklaracja
              Praw Człowieka i Obywatela.
            </p>
            <br />
            <p>
              <em>Andrzej Dziadzio</em>
            </p>
          </Modal1>
        </div>
        <div className="card">
          <h3>- Zniesiono -</h3>
          <span className="bar"></span>
          <p className="btc">
            <GiDevilMask />
          </p>
          <p>- liberum veto -</p>
          <p>- konfederacje -</p>
          <p>- wolną elekcję -</p>
          <p>- sejm skonfederowany -</p>
          <Link to="" className="btn" onClick={() => Toggle2()}>
            Czytaj
          </Link>
          <Modal2 show={modal2} close={Toggle2} title="Liberum veto">
            <p>
              Utrzymanie liberum veto, jako skutecznego narzędzia do blokowania
              reform, stało się szybko podstawowym celem obawiających się
              wzmocnienia Polski sąsiadów: Rosji, Austrii i Prus. Obce państwa i
              opozycja magnacka zapobiegły realizacji wysuwanych od lat 50. XVII
              w. projektów zniesienia liberum veto, zlikwidowanego dopiero na
              mocy Konstytucji 3 maja 1791.
            </p>
            <br />
            <p>
              <em>sztetl.org.pl/pl/slownik/liberum-veto-0</em>
            </p>
          </Modal2>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
