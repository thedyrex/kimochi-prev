import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <style>{`
          body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 0;
            background-color: #000000;
            min-height: 100vh;
          }
        `}</style>
      </Head>
      <main className="bg-black text-white p-4 min-h-screen">
        <h1 className="text-3xl mb-1">kimochi apparel</h1>
        <p className="text-xl mb-1">in production</p>
        <footer className="text-sm">&copy; 2025 kimochi</footer>
      </main>
    </>
  );
}
