import styles from "./banner.module.css";

export function UniversalBannerSection() {
  return (
    <section className="section">
      <div className="box">
        <div className={styles.banner_inner}></div>
      </div>
    </section>
  );
}
