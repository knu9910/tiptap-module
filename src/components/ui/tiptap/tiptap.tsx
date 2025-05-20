'use client';

import { EditorProvider } from './context/editor-context';
import { TiptapEditor } from './core';
type TipTapProps = {
  keyPath: string;
};

export const Tiptap = ({ keyPath }: TipTapProps) => {
  return (
    <div>
      <EditorProvider>
        <TiptapEditor />
      </EditorProvider>
    </div>
  );
};
