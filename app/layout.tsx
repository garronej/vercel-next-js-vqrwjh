import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

export default function RootLayout({ children }) {
  return (
    <html>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <head />
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
