import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Rehau | Gallery"}
        desc={"desc"}
        canonical={`${url}/gallery`}
      />
      <Layout>
        <p>Gallery</p>
      </Layout>
    </>
  );
}
