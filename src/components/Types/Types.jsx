import { useState } from "react";
import styles from "./Types.module.css";
import espresso from "../../assets/espresso.jpg";
import americano from "../../assets/americano.jpg";
import ristretto from "../../assets/ristretto.jpg";
import cappuccino from "../../assets/cappuccino.jpg";
import flat from "../../assets/flat.jpg";
import latte from "../../assets/latte.jpg";
import tiramisu from "../../assets/tiramisu.jpg";
import iced from "../../assets/iced.jpg";
import muffins from "../../assets/muffins.jpg";

export function Types() {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <>
      <h2>Popularne sposoby podawania kawy</h2>
      <div>
        <button
          onClick={() => setActiveSection(1)}
          disabled={activeSection === 1}
        >
          Bez mleka
        </button>
        <button
          onClick={() => setActiveSection(2)}
          disabled={activeSection === 2}
        >
          Z mlekiem
        </button>
        <button
          onClick={() => setActiveSection(3)}
          disabled={activeSection === 3}
        >
          Pod inną postacią
        </button>
      </div>
      {activeSection === 1 && (
        <section>
          <div>
            <h3>Espresso</h3>
            <p>
              <img src={espresso} alt="espresso" height={500} />
            </p>
            <p>
              Espresso charakteryzuje się intensywnym smakiem oraz mocno
              wyczuwalnym aromatem kawy. Można powiedzieć, że jest to napój dla
              osób, które chcą wyczuć pełnię smaku oferowaną przez ziarna.
              Espresso używamy także jako podstawę do większych napojów takich
              jak czarna kawa Americano lub do kaw mlecznych, na przykład
              Cappuccino, czy Latte Macchiato.
            </p>
          </div>
          <div>
            <h3>Americano</h3>
            <p>
              <img src={americano} alt="americano" height={400} />
            </p>
            <p>
              Americano to kawa powstała z połączenia wody i espresso. Jest
              zdecydowanie łagodniejsza w smaku ale tak samo pobudza.
            </p>
          </div>
          <div>
            <h3>Ristretto</h3>
            <p>
              <img src={ristretto} alt="ristretto" height={400} />
            </p>
            <p>
              Ristretto to bardzo krótkie espresso. Różnica między klasycznym
              espresso a ristretto ukryta jest w ilości wody oraz czasie
              ekstrakcji. Szybsza ekstrakcja w przypadku kawy ristretto sprawia,
              że ma ona nieco mniej kofeiny niż espresso, a przy tym jej walory
              smakowe zostały w pełni zachowane i są zbliżone do tych w
              espresso.
            </p>
          </div>
        </section>
      )}
      {activeSection === 2 && (
        <section>
          <div>
            <h3>Latte</h3>
            <p>
              <img src={latte} alt="latte" height={500} />
            </p>
            <p>
              Caffè latte, w skrócie często nazywana latte – włoski napój kawowy
              powstający w swojej klasycznej wersji w wyniku wlania spienionego
              ciepłego mleka do kawy espresso. Coraz częściej spotyka się różne
              wariacje kawy latte z dodatkami np. cynamon, miód, kardamon.
            </p>
          </div>
          <div>
            <h3>Cappuccino</h3>
            <p>
              <img src={cappuccino} alt="cappuccino" height={500} />
            </p>
            <p>
              Cappuccino to symbol Włoch i jeden z najpopularniejszych napojów
              kawowych na całym świecie. Poprawnie przygotowana, ma walory
              smakowe i aromaty zbliżone do espresso, jednak nieco łagodniejsze.
              Dobrze spienione mleko nie powoduje radykalnych zmian smaku kawy,
              a w niektórych przypadkach uwydatnia niektóre występujące w niej
              nuty smakowe.
            </p>
          </div>
          <div>
            <h3>Flat white</h3>
            <p>
              <img src={flat} alt="flat white" height={500} />
            </p>
            <p>
              Flat white to napój kawowy pochodzący z Australii lub Nowej
              Zelandii. Jest przygotowywany poprzez zalanie jednej lub dwóch
              porcji espresso spienionym mlekiem o jednorodnej, aksamitnej
              konsystencji. W odróżnieniu od caffè latte jest zazwyczaj podawane
              w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka.
            </p>
          </div>
        </section>
      )}
      {activeSection === 3 && (
        <section>
          <div>
            <h3>Tiramisu</h3>
            <p>
              <img src={tiramisu} alt="tiramisu" height={400} />
            </p>
            <p>
              Tiramisu to deser złożony z warstwy biszkoptu nasączonej bardzo
              mocną kawą espresso, na którą nakłada się warstwę kremu z sera
              mascarpone, żółtek jaj kurzych i cukru, a całość posypuje się
              warstwą grubo zmielonych płatków gorzkiej czekolady.
            </p>
          </div>
          <div>
            <h3>Kawa mrożona</h3>
            <p>
              <img src={iced} alt="iced coffee" height={500} />
            </p>
            <p>
              Kawa mrożona to napój kawowy podawany na zimno. Można ją
              przygotować, parząc kawę w zwykły sposób, a następnie podając ją z
              lodem lub zimnym mlekiem, albo parząc kawę na zimno.
            </p>
          </div>
          <div>
            <h3>Kawowe muffinki</h3>
            <p>
              <img src={muffins} alt="muffins" height={400} />
            </p>
            <p>
              Muffinki kawowe to puszyste, aromatyczne babeczki o intensywnym
              zapachu i smaku kawy, idealne na poranny deser lub do
              popołudniowej filiżanki espresso. Ich delikatna słodycz doskonale
              łączy się z nutą goryczy, tworząc harmonijny, pobudzający przysmak
              dla miłośników kawy.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
