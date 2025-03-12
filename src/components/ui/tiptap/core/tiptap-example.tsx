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

type Props = React.HTMLAttributes<HTMLElement> & {
  keyPath: string;
};

export const TiptapExample = ({ keyPath, className }: Props) => {
  const editor = useEditorContext();
  const { setContent } = useContentStore();

  useEffect(() => {
    setContent('');
  }, []);

  if (!editor) return null;

  return (
    <div className={cn(``)}>
      <div className={cn(`w-full border border-gray-300 flex p-0.3 rounded-md`)}>
        <TipTapFontStyle className="h-full min-w-[100px] rounded-none border-x-0" />
        <TipTapFontSize className="h-full min-w-[80px] rodunded-none" />
        <TipTapFontColor />
        <Bold />
        <Italic />
        <UnderLine />
        <Strike />
        <Highlight />
        <Img />
        <UrlLink />
      </div>
      <EditorContent
        editor={editor}
        className={cn(
          `border border-gray-300 p-4 ProseMirror-focused focus:outline-none [&>.tiptap]:!outline-none`,
          className,
        )}
      />
    </div>
  );
};
