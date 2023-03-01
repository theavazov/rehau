import { MainAboutSection } from "../components/home/about/about";
import { MainContactsSection } from "../components/home/contacts/contacts";
import { MainGallerySection } from "../components/home/gallery/gallery";
import { MainProductsSection } from "../components/home/products/products";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
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
      <Layout>
        <MainAboutSection />
        <MainProductsSection />
        <MainGallerySection />
        <MainContactsSection />
      </Layout>
    </>
  );
}
