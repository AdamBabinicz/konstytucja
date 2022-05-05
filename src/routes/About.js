import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Konfederacja targowicka"
        text="Spisek magnacki zawiązany w nocy z 18 na 19 maja 1792 w Targowicy (w rzeczywistości 27 kwietnia 1792 w Petersburgu), na życzenie i pod patronatem cesarzowej Rosji Katarzyny II, skierowany przeciwko reformom Sejmu Czteroletniego i Konstytucji 3 maja, uznany za symbol zdrady narodowej. Większość czołowych przywódców konfederacji targowickiej zostało skazanych na śmierć i powieszonych w czasie insurekcji kościuszkowskiej. 9 maja 1794 na Rynku Starego Miasta w Warszawie przed ratuszem powieszeni zostali publicznie przywódcy konfederacji skazani na karę śmierci przez Sąd Kryminalny Księstwa Mazowieckiego: hetman wielki koronny Piotr Ożarowski, marszałek Rady Nieustającej Józef Ankwicz i hetman polny litewski Józef Zabiełło. Czwarty skazany, biskup inflancki Józef Kazimierz Kossakowski, po zdjęciu święceń kapłańskich został powieszony przed kościołem św. Anny."
        text1="Sam tekst aktu konfederacji zredagował generał rosyjski Wasilij Popow, szef kancelarii księcia Grigorija Potiomkina. Wzięli w niej udział magnaci: generał artylerii koronnej Stanisław Szczęsny Potocki jako marszałek konfederacji koronnej, hetman wielki koronny Franciszek Ksawery Branicki, hetman polny koronny Seweryn Rzewuski, generał Szymon Marcin Kossakowski i inni. Sekretarzem konfederacji został publicysta Dyzma Bończa-Tomaszewski. Dążyli oni do podziału państwa na samodzielne prowincje. Zwrócili się w tym celu o pomoc wojskową do cesarzowej Rosji, uzyskali ją i 18 maja 1792 na Rzeczpospolitą uderzyła 100-tysięczna armia rosyjska – rozpoczęła się wojna polsko-rosyjska."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
