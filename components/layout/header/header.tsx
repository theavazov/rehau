import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import logo from "../../../public/media/logo.png";

type Props = {
  links: Array<any>;
};

export function Header({ links }: Props) {
  return (
    <header className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <div className={styles.main_nav}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="logo" />
          </Link>
          <nav className={styles.header_nav}>
            {links.map((link: any, i: number) => {
              return (
                <Link
                  key={i}
                  href={link.path}
                  className={
                    link.isActive
                      ? `${styles.nav_link} ${styles.active}`
                      : styles.nav_link
                  }
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className={styles.extra_nav}>
          <nav className={styles.langs}>
            <p className={styles.nav_link}>Рус</p>
            <p className={styles.nav_link}>Ўз</p>
            <p className={styles.nav_link}>O‘z</p>
            <p className={styles.nav_link}>En</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
