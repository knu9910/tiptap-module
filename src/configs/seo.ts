import type { Metadata } from 'next/types';

export const SEO_DEFAULT_TITLE = 'MontblancDePari';

export const SEO_DEFAULT_DESCRIPTION = ``;

export const SEO_DEFAULT_KEYWORD = ``;

export const MAIN_METADATA: Metadata = {
  title: {
    default: SEO_DEFAULT_TITLE,
    template: `%s | ${SEO_DEFAULT_TITLE}`,
  },
  description: SEO_DEFAULT_DESCRIPTION,
  keywords: SEO_DEFAULT_KEYWORD,
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'),
  applicationName: SEO_DEFAULT_TITLE,
};
