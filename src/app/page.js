import Head from "next/head";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Safety Equipment Manufacturing</title>
        <meta
          name="description"
          content="Top quality safety equipment for industrial use."
        />
      </Head>
      <h1>Welcome to Our Company</h1>
      <p>Your trusted partner in safety equipment manufacturing.</p>
    </Layout>
  );
}
