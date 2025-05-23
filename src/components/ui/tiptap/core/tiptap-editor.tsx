'use client';
import styles from './tiptap-editor.module.css';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import FontSize from 'tiptap-extension-font-size';
import { CustomImage, YouTubeVideo } from '../extended';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import { useEffect } from 'react';
import { useContentStore } from '@/components/ui/tiptap/plugin';
import { cn } from '@/lib/utils';
import { Toolbar } from './toolbar';
import { ScrollArea } from '../../scroll-area/scroll-area';
import { TableContextMenu } from '../menus/table-context-menu';

type Props = React.HTMLAttributes<HTMLElement> & {
  keyId: string;
  height?: number;
};

export const TiptapEditor = ({ className, keyId, height = 400 }: Props) => {
  const { getContent, setContent } = useContentStore();
  const initialContent = getContent(keyId);

  const editor = useEditor({
    extensions: [
      Color,
      Highlight.configure({ multicolor: true }),
      StarterKit,
      Underline,
      FontFamily,
      TextStyle,
      FontSize,
      CustomImage,
      YouTubeVideo,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
        alignments: ['left', 'right', 'center'],
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: {
          class: 'font-bold hover:text-orange-600 hover:underline',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'h-full',
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;
    const initial = getContent(keyId);
    if (initial && editor.getHTML() !== initial) {
      editor.commands.setContent(initial);
    }
  }, [editor, keyId, getContent]);

  useEffect(() => {
    if (!editor) return;
    const handler = () => {
      setContent(keyId, editor.getHTML());
    };
    editor.on('update', handler);
    return () => {
      editor.off('update', handler);
    };
  }, [editor, setContent, keyId]);

  if (!editor) return null;

  return (
    <div className={`${cn('border rounded-xl relative', className)}`}>
      <Toolbar editor={editor} />
      <ScrollArea style={{ height: `${height}px` }}>
        <EditorContent
          editor={editor}
          className={cn(
            'p-6 border-none [&>.tiptap]:!outline-none',
            '[&_.resize-cursor]:cursor-col-resize',
            styles.tiptapGlobalStyles,
            className
          )}
          style={{ height: `${height}px` }}
        />
        <TableContextMenu editor={editor} />
      </ScrollArea>
    </div>
  );
};
