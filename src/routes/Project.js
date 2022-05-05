import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import PricingCard from "../components/PricingCard";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Projekt"
        text="Uchwalona przez króla Stanisława Augusta Poniatowskiego wraz ze
          stanami skonfederowanemi w liczbie podwóyney naród Polski
          reprezentującemi. Została zaprojektowana w celu zlikwidowania obecnych
          od dawna wad opartego na wolnej elekcji i demokracji szlacheckiej
          systemu politycznego Rzeczypospolitej Obojga Narodów. Konstytucja
          zmieniła ustrój państwa na monarchię dziedziczną, ograniczyła znacząco
          demokrację szlachecką, odbierając prawo głosu i decyzji w sprawach
          państwa szlachcie nieposiadającej ziemi (gołocie), wprowadziła
          częściowe zrównanie praw osobistych mieszczan i szlachty oraz stawiała
          chłopów pod ochroną państwa, w ten sposób łagodząc nadużycia
          pańszczyzny. Konstytucja formalnie zniosła liberum veto."
        text1="Przyjęcie monarchicznej Konstytucji 3 maja spowodowało opozycję republikanów oraz sprowokowało wrogość Imperium Rosyjskiego, które od 1768 roku było protektorem Rzeczypospolitej i gwarantem nienaruszalności jej ustroju. W wojnie w obronie konstytucji Polska, zdradzona przez swojego pruskiego sprzymierzeńca Fryderyka Wilhelma II, została pokonana przez wojska rosyjskie Katarzyny Wielkiej, wspierające konfederację targowicką – spisek części polskich magnatów przeciwnych zmianie ustroju Rzeczypospolitej. Po utracie niepodległości w 1795 roku przez 123 lata rozbiorów przypominała o walce o niepodległość."
      />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
