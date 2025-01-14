import './globals.css';
import { MAIN_METADATA } from '@/configs/seo';
import { notoSansKr } from '@/configs/fonts';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = MAIN_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${cn(notoSansKr.className)}`}>{children}</body>
    </html>
  );
}
