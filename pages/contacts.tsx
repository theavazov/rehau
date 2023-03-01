import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Rehau | Contacts"}
        desc={"desc"}
        canonical={`${url}/contacts`}
      />
      <Layout>
        <p>Contacts</p>
      </Layout>
    </>
  );
}
