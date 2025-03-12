'use client';

import { EditorProvider } from './context/editor-context';
import { TiptapExample } from './core';
type TipTapProps = {
  keyPath: string;
};

export const Tiptap = ({ keyPath }: TipTapProps) => {
  return (
    <div>
      <EditorProvider>
        <TiptapExample keyPath="asd" />
      </EditorProvider>
    </div>
  );
};
