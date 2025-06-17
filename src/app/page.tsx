import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <style>{`
          html, body, *, *::before, *::after {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 0;
            background-color: #000000;
            min-height: 100vh;

            /* Disable text selection and image dragging */
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            -webkit-user-drag: none;
            -webkit-touch-callout: none;

            touch-action: none;
          }
        `}</style>
      </Head>
      <main className="bg-black text-white p-4 min-h-screen select-none">
        <h1 className="text-3xl mb-1">kimochi apparel</h1>
        <p className="text-xl mb-1">in production</p>
        <footer className="text-sm mb-4">&copy; 2025 kimochi. all rights reserved.</footer>
        <img
          src="/kimochivhs.webp"
          alt="Kimochi VHS"
          className="w-full max-w-md pointer-events-none"
          draggable={false}
        />
      </main>
    </>
  );
}
