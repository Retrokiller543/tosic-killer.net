import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    title: string;
    children: React.ReactNode;
}

export default function Layout({ title, children }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
                <Navbar />
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    {children}
                </main>
                <Footer />
            </>
    )
}