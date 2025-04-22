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
    <div className={cn('w-full space-y-4', className)}>
      <div className={cn('w-full bg-white flex items-center p-2 rounded-xl shadow-sm border border-gray-100 gap-2')}>
        <TipTapFontStyle className='h-10 w-[140px] rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all' />
        <TipTapFontSize className='h-10 w-[100px] rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all' />
        <TipTapFontColor className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all' />
        <div className='h-10 w-px bg-gray-100 mx-1' />
        <Bold className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <Italic className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <UnderLine className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <Strike className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <div className='h-10 w-px bg-gray-100 mx-1' />
        <Highlight className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <Img className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
        <UrlLink className='h-10 w-10 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-center' />
      </div>
      <EditorContent
        editor={editor}
        className={cn(
          'bg-white p-6 rounded-xl shadow-sm min-h-[400px] border border-gray-100 ProseMirror-focused:outline-none [&>.tiptap]:!outline-none',
          className,
        )}
      />
    </div>
  );
};
