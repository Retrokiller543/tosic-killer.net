import Layout from "./components/Layout";
import Particles from 'react-tsparticles'

export const metadata = {
  title: 'Home',
  description: 'Home page',
}



export default function Home() {
  return (
    <Layout title={metadata.title}>
      <section>
        <h1>Home</h1>
        <p>Welcome to my website!</p>
      </section>
    </Layout>
  )
}
