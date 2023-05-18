import Layout from "../components/Layout";

export const metadata = {
  title: 'Contact Me',
  description: 'Ways of contacting me',
}

export default function Contact() {
  return (
    <Layout title={metadata.title}>
      <section>
        <h1>Contact Me</h1>
        <p>You can reach me at [your email address].</p>
      </section>
    </Layout>
  );
}