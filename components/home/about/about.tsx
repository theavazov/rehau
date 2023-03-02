import Link from "next/link";
import styles from "./about.module.css";

export function MainAboutSection() {
  return (
    <section className={styles.section}>
      <div className={`box ${styles.section_inner}`}>
        <h3 className="section_title">О компании</h3>
        <div className={styles.section_content_container}>
          <div className={styles.about_info}>
            <div className={styles.about_info_texts}>
              <p>
                В люксовом зале{" "}
                <span style={{ color: "var(--teal)", fontWeight: "600" }}>
                  REHAU
                </span>{" "}
                можно провести ивенты любого масштаба: от отраслевых митапов до
                международных конференций с участием представителей локального
                бизнеса и инвесторов, а также вовлечением медиа-ресурсов.
              </p>
              <p>
                Практическое применение ценностей встроено во все процессы
                National Development Community. Например, ценность «польза»
                помогает определить, будем ли мы работать с клиентом:
              </p>
            </div>
            <div className={styles.about_buttons}>
              <Link href={"#"} className="btn primary">
                Узнать стоимость
              </Link>
              <Link href={"#"} className="btn secondary">
                Связаться с нами
              </Link>
            </div>
          </div>
          <div className={styles.about_info}></div>
          <div className={`skeleton ${styles.about_video}`}></div>
        </div>
      </div>
    </section>
  );
}
