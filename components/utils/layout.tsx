import { useRouter } from "next/router";
import { chat } from "../../public/icons";
import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  const links = [
    {
      title: "Главная",
      path: "/",
      isActive: pathname === "/" ? true : false,
    },
    {
      title: "О нас",
      path: "/about",
      isActive: pathname === "/about" ? true : false,
    },
    {
      title: "Услуги",
      path: "/services",
      isActive: pathname === "/services" ? true : false,
    },
    {
      title: "Тарифы",
      path: "/tariffs",
      isActive: pathname === "/tariffs" ? true : false,
    },
    {
      title: "Галерея",
      path: "/gallery",
      isActive: pathname === "/gallery" ? true : false,
    },
    {
      title: "Контакты",
      path: "/contacts",
      isActive: pathname === "/contacts" ? true : false,
    },
  ];

  return (
    <>
      <div className="wrapper">
        <Header links={links} />
        <main>{children}</main>
        <Footer links={links} />
      </div>
      <button aria-label="chat" className="chat">
        {chat}
      </button>
    </>
  );
}
