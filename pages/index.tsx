import { CustomHead } from "../components/utils/head";
import { url } from "./_app";

export default function Home() {
  return (
    <>
      <CustomHead
        title={"Rehau"}
        desc={
          "В люксовом зале REHAU можно провести ивенты любого масштаба: от отраслевых митапов до международных конференций с участием представителей локального бизнеса и инвесторов, а также вовлечением медиа-ресурсов. Практическое применение ценностей встроено во все процессы National Development Community"
        }
        canonical={url}
      />
      <p>Home</p>
    </>
  );
}
