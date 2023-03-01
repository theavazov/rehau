import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Rehau | Services"}
        desc={"desc"}
        canonical={`${url}/services`}
      />
      <Layout>
        <p>Services</p>
      </Layout>
    </>
  );
}
