'use client';
import { EditorProvider } from '@/components/ui/tiptap/context/editor-context';
import { cn } from '@/lib/utils';
import { TiptapEditor, TiptapViewer } from '@/components/ui/tiptap/core';
import { useContentStore } from '@/components/ui/tiptap/plugin';

type Props = React.HTMLAttributes<HTMLElement>;

export const ComponentExample = ({ className }: Readonly<Props>) => {
  const { getTiptapKey } = useContentStore();
  const keyId = getTiptapKey();
  const keyId2 = getTiptapKey();
  return (
    <div className={cn('', className)}>
      <EditorProvider>
        <TiptapEditor keyId={keyId} />
        <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      </EditorProvider>
      <TiptapViewer className="border p-4" keyId={keyId} />

      <EditorProvider>
        <TiptapEditor keyId={keyId2} />
        <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      </EditorProvider>
      <TiptapViewer className="border p-4" keyId={keyId2} />
    </div>
  );
};
