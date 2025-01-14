'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import FontSize from 'tiptap-extension-font-size';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import { CustomImage, YouTubeVideo } from '../extended';
import Link from '@tiptap/extension-link';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  content: string; // content는 반드시 string 타입으로 받습니다.
};

export const TiptapViewer = ({ className, content }: Props) => {
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
          class: 'font-bold hover:text-orange-600 hover:underline', // TailwindCSS 클래스 적용
        },
      }),
    ],
    content,
    editable: false,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content); // 상태에서 content가 변경되면 에디터 내용도 업데이트
    }
  }, [content, editor]); // content나 editor가 변경될 때마다 실행

  if (!editor) return null;

  return <EditorContent editor={editor} className={cn('', className)} />;
};

export default TiptapViewer;
