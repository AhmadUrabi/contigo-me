import Script from "next/script"

export default function Head() {
  return (
    <>
      <title>Contigo Middle East</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Contigo Middle East" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R8GD2D2JL6"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G-R8GD2D2JL6', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    </>
  )
}
