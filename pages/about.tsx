import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function AboutPage() {
  return (
    <>
      <CustomHead
        title={"Rehau | About"}
        desc={"desc"}
        canonical={`${url}/about`}
      />
      <Layout>
        <p>About</p>
      </Layout>
    </>
  );
}
