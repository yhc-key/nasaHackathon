
import './globals.css'; // 기존 글로벌 CSS 파일을 import
import Head from 'next/head';

export const metadata = {
  title: '잠푸 나사 해커톤',
  description: 'Nasa Hackathon Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body>{children}</body>
    </html>
  )
}