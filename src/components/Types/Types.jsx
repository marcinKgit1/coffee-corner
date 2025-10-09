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
import { Description } from "../Description/Description";
import { Button } from "../Button/Button";

export function Types() {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <>
      <h2 className={styles.header}>Popularne sposoby podawania kawy</h2>
      <div className={styles.buttons}>
        <Button
          onClick={() => setActiveSection(1)}
          disabled={activeSection === 1}
        >
          Bez mleka
        </Button>
        <Button
          onClick={() => setActiveSection(2)}
          disabled={activeSection === 2}
        >
          Z mlekiem
        </Button>
        <Button
          onClick={() => setActiveSection(3)}
          disabled={activeSection === 3}
        >
          Pod inną postacią
        </Button>
      </div>
      {activeSection === 1 && (
        <section>
          <h2 className={styles.header}>Espresso</h2>
          <div className={styles.container}>
            <p>
              <img src={espresso} alt="espresso" height={500} />
            </p>
            <Description>
              Espresso charakteryzuje się intensywnym smakiem oraz mocno
              wyczuwalnym aromatem kawy. Można powiedzieć, że jest to napój dla
              osób, które chcą wyczuć pełnię smaku oferowaną przez ziarna.
              Espresso używamy także jako podstawę do większych napojów takich
              jak czarna kawa Americano lub do kaw mlecznych, na przykład
              Cappuccino, czy Latte Macchiato.
            </Description>
          </div>
          <h2 className={styles.header}>Americano</h2>
          <div className={styles.container}>
            <p>
              <img src={americano} alt="americano" height={350} />
            </p>
            <Description>
              Americano to kawa powstała z połączenia wody i espresso. Jest
              zdecydowanie łagodniejsza w smaku ale tak samo pobudza.
            </Description>
          </div>
          <h2 className={styles.header}>Ristretto</h2>
          <div className={styles.container}>
            <p>
              <img src={ristretto} alt="ristretto" height={350} />
            </p>
            <Description>
              Ristretto to bardzo krótkie espresso. Różnica między klasycznym
              espresso a ristretto ukryta jest w ilości wody oraz czasie
              ekstrakcji. Szybsza ekstrakcja w przypadku kawy ristretto sprawia,
              że ma ona nieco mniej kofeiny niż espresso, a przy tym jej walory
              smakowe zostały w pełni zachowane i są zbliżone do tych w
              espresso.
            </Description>
          </div>
        </section>
      )}
      {activeSection === 2 && (
        <section>
          <h2 className={styles.header}>Latte</h2>
          <div className={styles.container}>
            <p>
              <img src={latte} alt="latte" height={500} />
            </p>
            <Description>
              Caffè latte, w skrócie często nazywana latte – włoski napój kawowy
              powstający w swojej klasycznej wersji w wyniku wlania spienionego
              ciepłego mleka do kawy espresso. Coraz częściej spotyka się różne
              wariacje kawy latte z dodatkami np. cynamon, miód, kardamon.
            </Description>
          </div>
          <h2 className={styles.header}>Cappuccino</h2>
          <div className={styles.container}>
            <p>
              <img src={cappuccino} alt="cappuccino" height={500} />
            </p>
            <Description>
              Cappuccino to symbol Włoch i jeden z najpopularniejszych napojów
              kawowych na całym świecie. Poprawnie przygotowana, ma walory
              smakowe i aromaty zbliżone do espresso, jednak nieco łagodniejsze.
              Dobrze spienione mleko nie powoduje radykalnych zmian smaku kawy,
              a w niektórych przypadkach uwydatnia niektóre występujące w niej
              nuty smakowe.
            </Description>
          </div>
          <h2 className={styles.header}>Flat white</h2>
          <div className={styles.container}>
            <p>
              <img src={flat} alt="flat white" height={500} />
            </p>
            <Description>
              Flat white to napój kawowy pochodzący z Australii lub Nowej
              Zelandii. Jest przygotowywany poprzez zalanie jednej lub dwóch
              porcji espresso spienionym mlekiem o jednorodnej, aksamitnej
              konsystencji. W odróżnieniu od caffè latte jest zazwyczaj podawane
              w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka.
            </Description>
          </div>
        </section>
      )}
      {activeSection === 3 && (
        <section>
          <h2 className={styles.header}>Tiramisu</h2>
          <div className={styles.container}>
            <p>
              <img src={tiramisu} alt="tiramisu" height={350} />
            </p>
            <Description>
              Tiramisu to deser złożony z warstwy biszkoptu nasączonej bardzo
              mocną kawą espresso, na którą nakłada się warstwę kremu z sera
              mascarpone, żółtek jaj kurzych i cukru, a całość posypuje się
              warstwą grubo zmielonych płatków gorzkiej czekolady.
            </Description>
          </div>
          <h2 className={styles.header}>Kawa mrożona</h2>
          <div className={styles.container}>
            <p>
              <img src={iced} alt="iced coffee" height={500} />
            </p>
            <Description>
              Kawa mrożona to napój kawowy podawany na zimno. Można ją
              przygotować, parząc kawę w zwykły sposób, a następnie podając ją z
              lodem lub zimnym mlekiem, albo parząc kawę na zimno.
            </Description>
          </div>
          <h2 className={styles.header}>Kawowe muffinki</h2>
          <div className={styles.container}>
            <p>
              <img src={muffins} alt="muffins" height={350} />
            </p>
            <Description>
              Muffinki kawowe to puszyste, aromatyczne babeczki o intensywnym
              zapachu i smaku kawy, idealne na poranny deser lub do
              popołudniowej filiżanki espresso. Ich delikatna słodycz doskonale
              łączy się z nutą goryczy, tworząc harmonijny, pobudzający przysmak
              dla miłośników kawy.
            </Description>
          </div>
        </section>
      )}
    </>
  );
}
