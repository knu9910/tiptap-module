'use client';
import { cn } from '@/lib/utils';
import { TiptapEditor, TiptapViewer } from '@/components/custom-ui/tiptap/core';

type Props = React.HTMLAttributes<HTMLElement>;

export const ComponentExample = ({ className }: Readonly<Props>) => {
  return (
    <div className={cn('', className)}>
      <TiptapEditor keyId={'12'} />
      <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      <TiptapViewer className="border p-4" keyId={'12'} />

      <TiptapEditor keyId={'123'} />
      <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      <TiptapViewer content={'123'} className="border p-4" keyId={'123'} />
    </div>
  );
};
