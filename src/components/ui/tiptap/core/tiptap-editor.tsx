'use client';
import styles from './tiptap-editor.module.css';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editor-context';
import { useEffect } from 'react';
import { useContentStore } from '@/components/ui/tiptap/plugin';
import { cn } from '@/lib/utils';
import { Toolbar } from './toolbar';
import { ScrollArea } from '../../scroll-area/scroll-area';
import { TableContextMenu } from '../menus/table-context-menu';

type Props = React.HTMLAttributes<HTMLElement> & {
  content?: string;
};

export const TiptapEditor = ({ className, content }: Props) => {
  const editor = useEditorContext();
  const { setContent } = useContentStore();

  useEffect(() => {
    // if (content) editor.commands.setContent(content);
    // setContent(content || '');
  }, []);

  if (!editor) return null;

  return (
    <div className={`${cn('border rounded-xl relative', className)}`}>
      <Toolbar />
      <ScrollArea className="h-[400px]">
        <EditorContent
          editor={editor}
          className={cn(
            'p-6 min-h-[400px] border-none [&>.tiptap]:!outline-none',
            '[&_.resize-cursor]:cursor-col-resize',
            styles.tiptapGlobalStyles,
            className
          )}
        />
        <TableContextMenu />
      </ScrollArea>
    </div>
  );
};
