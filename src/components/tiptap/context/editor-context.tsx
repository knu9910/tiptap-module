'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useEditor, Editor } from '@tiptap/react';
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
import { useContentStore } from '../plugin';

// 기본적인 Tiptap extensions 설정 (필요시 추가 가능)
const EditorContext = createContext<Editor | null>(null);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const { content, setContent } = useContentStore();
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
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      setContent(htmlContent); // 편집기 내용 업데이트 시 상태도 갱신
    },
    immediatelyRender: false,
  });

  if (!editor) return null; // Editor가 초기화되지 않았다면 아무것도 렌더링하지 않음

  return <EditorContext.Provider value={editor}>{children}</EditorContext.Provider>;
};
// useEditor 훅을 통해 다른 컴포넌트에서 editor에 접근할 수 있습니다.
export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditorContext must be used within an EditorProvider');
  }
  return context;
};
