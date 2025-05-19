'use client';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editor-context';
import { useEffect } from 'react';
import { useContentStore } from '@/components/ui/tiptap/plugin';
import { cn } from '@/lib/utils';
import { Toolbar } from './toolbar';
import { ScrollArea } from '../../scroll-area/scroll-area';

type Props = React.HTMLAttributes<HTMLElement> & {
  content?: string;
};

export const TiptapEditor = ({ className, content }: Props) => {
  const editor = useEditorContext();
  const { setContent } = useContentStore();

  useEffect(() => {
    if (content) editor.commands.setContent(content);
    setContent(content || '');
  }, []);

  if (!editor) return null;

  return (
    <div className={cn('border rounded-xl', className)}>
      <Toolbar />
      <ScrollArea className="h-[400px]">
        <EditorContent
          editor={editor}
          className={cn(
            'p-6 min-h-[400px] border-none [&>.tiptap]:!outline-none',
            '[&_th]:border [&_td]:border [&_th]:border-gray-300 [&_td]:border-gray-300 [&_th]:bg-gray-100 [&_th]:font-semibold [&_th]:text-gray-900 [&_td]:px-2 [&_td]:py-1 [&_th]:px-2 [&_th]:py-1',
            '[&_.resize-cursor]:cursor-col-resize',
            className
          )}
        />
      </ScrollArea>
    </div>
  );
};
