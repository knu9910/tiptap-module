'use client';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editor-context';
import {
  TipTapFontStyle,
  TipTapFontColor,
  TipTapFontSize,
  Bold,
  Italic,
  UnderLine,
  Strike,
  Highlight,
  Img,
  YoutubeLink,
  SavedContent,
  LoadContent,
  Preview,
  UrlLink,
  TextAlignLeft,
  TextAlignRight,
  TextAlignCenter,
  TextAlignJustify,
} from '../menus';
import { useEffect } from 'react';
import { useContentStore } from '@/components/ui/tiptap/plugin';
import { cn } from '@/lib/utils';
import { Separator } from '../menus/common/separator';
import { Toolbar } from './toolbar';
import { ScrollArea } from '../../scroll-area/scroll-area';

type Props = React.HTMLAttributes<HTMLElement> & {
  keyPath?: string;
  content?: string;
};

export const TiptapExample = ({ keyPath, className, content }: Props) => {
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
      <ScrollArea className="h-[400px] max-h-[400px] overflow-y-auto">
        <EditorContent
          editor={editor}
          className={cn('p-6 min-h-[400px] border-none [&>.tiptap]:!outline-none', className)}
        />
      </ScrollArea>
    </div>
  );
};
