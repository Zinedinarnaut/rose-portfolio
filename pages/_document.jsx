import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const headdata = [
    {
      url: "https://rose-portfolio-six.vercel.app",
      title: "Ayl Rose",
    },
  ];
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <Script src="../components/useDarkMode.jsx" />
        <script async src="https://arc.io/widget.min.js#Hom8FA2X"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-0nDFE+k43BRyQa/Y7lm9ZGGpO4SwdTz/V4n9g3y2W3b8Y/lAht/sTkj4lREd5e3ATzA6S4R1MDPeDckj44eMQg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="shortcut icon"
          href="/araxyso2.png"
        />
        <meta name="author" content="Aly Rose" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={headdata.url} />
        <meta property="og:title" content={headdata.title} />
        <meta property="og:description" content={headdata.description} />
        {/* twitter: */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={headdata.url} />
        <meta property="twitter:title" content={headdata.title} />
        <meta property="twitter:description" content={headdata.description} />
      </Head>
      <body className="dark:bg-[#111111] bg-[#f9fafb] dark:text-white duration-75">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
