import { location, phone } from "../../../public/icons";
import styles from "./contacts.module.css";

export function MainContactsSection() {
  return (
    <section className={styles.section}>
      <div className={`box ${styles.section_inner}`}>
        <div className={styles.contacts_content}>
          <div className={styles.contact_info}>
            <p className={styles.info_top}>{location} Адресс</p>
            <div className={styles.info_bottom}>
              <p>
                Шота Руставели 1-тор кучаси, 6-уй, 6 Ул.Шота Руставели,
                1-проезд, Tashkent 100100
              </p>
            </div>
          </div>
          <div className={styles.contact_info}>
            <p className={styles.info_top}>{phone} Телефон</p>
            <div className={styles.info_bottom}>
              <p>
                (+998) 55 508 06 06, (+998) 99 432 00 88 (+998) 99 308 06 06
              </p>
            </div>
          </div>
          <div className={styles.contact_info}>
            <p className={styles.info_top}>{phone} Email</p>
            <div className={styles.info_bottom}>
              <p>Rehau@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95886.95782590976!2d69.3272576!3d41.320448000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1677674197231!5m2!1suz!2s"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
