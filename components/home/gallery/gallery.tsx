import Link from "next/link";
import { arrowRight } from "../../../public/icons";
import styles from "./gallery.module.css";

export function MainGallerySection() {
  return (
    <section className={styles.section}>
      <div className={`box ${styles.section_inner}`}>
        <h3 className="section_title">Нашa галерея</h3>
        <Link href={"/gallery"} className={styles.inner_link}>
          Посмотрeть все {arrowRight}
        </Link>
      </div>
    </section>
  );
}
