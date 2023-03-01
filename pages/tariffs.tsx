import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Rehau | Tariffs"}
        desc={"desc"}
        canonical={`${url}/tariffs`}
      />
      <Layout>
        <p>Tariffs</p>
      </Layout>
    </>
  );
}
