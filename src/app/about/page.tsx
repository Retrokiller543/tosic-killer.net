import Layout from "../components/Layout";

export const metadata = {
  title: 'About Me',
  description: 'About me',
}

export default function About() {
  return (
    <Layout title={metadata.title}>
      <section>
        <h1>About Me</h1>
        <p>I am a web developer based in [your location].</p>
      </section>
    </Layout>
  );
}