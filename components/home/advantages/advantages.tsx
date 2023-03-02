import { cloud } from "../../../public/icons";
import styles from "./advantages.module.css";

export function MainAdvantagesSection() {
  const advantages = [
    {
      title: "Работаем от производителя",
      desc: "Почти полмиллиона достопримечательностей, отелей и многого другого не оставят вас равнодушными.",
    },
    {
      title: "Даем гарантия на окна и двери 2-5 лет",
      desc: "Качественная деятельность. Отличные цены. Кроме того, зарабатывайте кредиты Klook, чтобы экономить больше.",
    },
    {
      title: "У нас 3 салона в городе Ташкент",
      desc: "У нас действует бесплатная доставка до подъезда в черте города Бобруйска.За городом 1 км – 1 руб.",
    },
    {
      title: "Дарим скидки 3-5% по запросу",
      desc: "Качественная деятельность. Отличные цены. Кроме того, зарабатывайте кредиты Klook, чтобы cэкономить больше.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`box ${styles.advantages_container}`}>
        {advantages.map((advantage: any, i: number) => {
          return (
            <div key={i} className={styles.advantage}>
              <div className={styles.advantage_icon}>{cloud}</div>
              <div className={styles.advantage_content}>
                <p className={styles.advantage_title}>{advantage.title}</p>
                <p className={styles.advantage_desc}>{advantage.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
