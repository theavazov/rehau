import styles from "./footer.module.css";
import logo from "../../../public/media/logo.png";
import Link from "next/link";
import Image from "next/image";
import { facebook, instagram, telegram, youtube } from "../../../public/icons";

type Props = {
  links: Array<any>;
};

export function Footer({ links }: Props) {
  const socialmedia = [
    {
      icon: telegram,
      path: "#",
    },
    {
      icon: facebook,
      path: "#",
    },
    {
      icon: youtube,
      path: "#",
    },
    {
      icon: instagram,
      path: "#",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="logo" />
        </Link>
        <nav className={styles.footer_nav}>
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
        <nav className={styles.socialmedia}>
          {socialmedia.map((sm: any, i: number) => {
            return (
              <a
                key={i}
                href={sm.path}
                target={"_blank"}
                rel="noreferrer"
                className={styles.sm}
              >
                {sm.icon}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
