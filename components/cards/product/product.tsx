import styles from "./product.module.css";
import pImage from "../../../public/media/product.jpg";
import Image from "next/image";

export function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image src={pImage} alt="product image" className="image" />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_info}>
          <p className={styles.card_category}>Пластик</p>
          <p className={styles.card_title}>Quattro 6000</p>
          <p className={styles.card_case}>Окна на кухню</p>
        </div>
        <button className={styles.card_btn}>Подробнее</button>
      </div>
    </div>
  );
}
