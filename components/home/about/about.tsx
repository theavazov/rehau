import styles from "./about.module.css";

export function MainAboutSection() {
  return (
    <section className={styles.section}>
      <div className={`box ${styles.section_inner}`}>
        <h3 className="section_title">О компании</h3>
        <div className={styles.section_content_container}></div>
      </div>
    </section>
  );
}
