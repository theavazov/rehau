import { useState } from "react";
import { ProductCard } from "../../cards/product/product";
import styles from "./products.module.css";

export function MainProductsSection() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className={styles.section}>
      <div className={`box ${styles.section_inner}`}>
        <div className={styles.section_top}>
          <h3 style={{ color: "#020105" }} className="section_title">
            Оконные продукты
          </h3>
          <div className={styles.tab_content}>
            <p
              className={
                tab === 1 ? `${styles.tab} ${styles.active}` : styles.tab
              }
              onClick={() => {
                setTab(1);
              }}
            >
              Типы окна
            </p>
            <p
              className={
                tab === 2 ? `${styles.tab} ${styles.active}` : styles.tab
              }
              onClick={() => {
                setTab(2);
              }}
            >
              Типы ручек
            </p>
            <p
              className={
                tab === 3 ? `${styles.tab} ${styles.active}` : styles.tab
              }
              onClick={() => {
                setTab(3);
              }}
            >
              Защитная оболочка
            </p>
          </div>
        </div>
        <div className={styles.products_container}>
          {tab === 1 ? (
            <>
              <ProductCard />
            </>
          ) : tab === 2 ? (
            <>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </>
          ) : tab === 3 ? (
            <>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
