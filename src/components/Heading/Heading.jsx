import styles from "./Heading.module.css";
import frog from "../../assets/frog.jpg";
export function Heading() {
  return (
    <>
      <header>
        <h1 className={styles.header}>Witaj w świecie kawy</h1>
        <p className={styles.photo}>
          <img src={frog} alt="frog" height={400} />
        </p>
        <p className={styles.text}>
          Kawa to jeden z najpopularniejszych napojów na świecie – codziennie
          sięgają po nią miliony ludzi, niezależnie od kultury czy miejsca
          zamieszkania. Jej historia sięga setek lat wstecz, a początki upraw
          wiążą się z Etiopią i Półwyspem Arabskim. Z czasem kawa dotarła do
          Europy, a następnie na inne kontynenty, stając się nieodłącznym
          elementem życia społecznego. Najcenniejszym surowcem są ziarna
          kawowca, które po odpowiednim wypaleniu i zmieleniu nabierają
          charakterystycznego aromatu. Wyróżnia się dwa główne gatunki: Arabikę
          – delikatniejszą, o łagodnym smaku, oraz Robustę, mocniejszą i
          bardziej gorzką. Picie kawy to nie tylko kwestia smaku i pobudzenia
          dzięki kofeinie. To także rytuał – spotkania przy filiżance espresso,
          poranne cappuccino czy powolne delektowanie się kawą przelewową stały
          się elementem codziennych przyzwyczajeń. Co więcej, liczne badania
          wskazują, że umiarkowane spożycie kawy może korzystnie wpływać na
          zdrowie, poprawiając koncentrację i zmniejszając ryzyko niektórych
          chorób. Kawa to więc nie tylko napój – to kultura, tradycja i
          przyjemność, która łączy ludzi od pokoleń.
        </p>
      </header>
    </>
  );
}
