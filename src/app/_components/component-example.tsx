'use client';
import { EditorProvider } from '@/components/ui/tiptap/context/editor-context';
import { cn } from '@/lib/utils';
import { TiptapEditor, TiptapViewer } from '@/components/ui/tiptap/core';

type Props = React.HTMLAttributes<HTMLElement>;

export const ComponentExample = ({ className }: Readonly<Props>) => {
  return (
    <div className={cn('', className)}>
      <EditorProvider>
        <TiptapEditor keyId={'12'} />
        <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      </EditorProvider>
      <TiptapViewer className="border p-4" keyId={'12'} />

      <EditorProvider>
        <TiptapEditor keyId={'123'} />
        <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      </EditorProvider>
      <TiptapViewer className="border p-4" keyId={'123'} />
    </div>
  );
};
