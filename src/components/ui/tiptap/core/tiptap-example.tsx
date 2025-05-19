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
} from '../menus';
import { useEffect } from 'react';
import { useContentStore } from '@/components/ui/tiptap/plugin';
import { cn } from '@/lib/utils';
import { Separator } from '../menus/common/separator';

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
      <div className={cn('flex items-center py-1 px-4 border-b')}>
        <TipTapFontStyle />
        <Separator />
        <TipTapFontSize />
        <Separator />
        <TipTapFontColor />
        <Highlight />
        <Separator />
        <Bold />
        <Italic />
        <UnderLine />
        <Strike />
        <UrlLink />
        <Separator />
        <Img />
      </div>
      <EditorContent
        editor={editor}
        className={cn('p-6 min-h-[400px] border-none  [&>.tiptap]:!outline-none', className)}
      />
    </div>
  );
};
