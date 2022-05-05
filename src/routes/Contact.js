import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="II Rozbiór Polski"
        text="Wykorzystując kapitulację Stanisława Augusta Poniatowskiego po wojnie polsko-rosyjskiej w roku 1792 i przejęcie rządów w Polsce przez targowiczan, 25 października 1792 król pruski Fryderyk Wilhelm II zażądał wcielenia Wielkopolski do Królestwa Prus. Miała być ona ekwiwalentem za niepowodzenia armii pruskich w wojnie przeciwko rewolucyjnej Francji, prowadzonej w koalicji absolutystycznych monarchii europejskich. Żądanie to warunkował groźbą wycofania się Prus z koalicji antyfrancuskiej, ale wnet przekształciło się ono w propozycję II rozbioru części ziem Rzeczypospolitej pomiędzy Rosję i Prusy."
        text1="23 stycznia 1793 doszło do podpisania traktatu podziałowego między Katarzyną II a Fryderykiem Wilhelmem II, po czym wojska pruskie, dowodzone przez Joachima Heinricha von Möllendorfa, weszły do Wielkopolski, a armia rosyjska do wschodniej Polski. Wojska polskie w większości wycofywały się z oddawanych ziem; jednym z nielicznych starć była obrona ratusza w Kargowej. 25 marca król pruski wydał patent inkorporacyjny, w którym wezwał pod groźbą kary wszystkich mieszkańców zajętych przez siebie ziem do złożenia hołdu (homagium)."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
