// hooks/useActive.ts
import { useEffect, useState } from 'react';
import { Editor } from '@tiptap/react';

export const useIsActive = (editor: Editor | null, type: string) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!editor) return;

    const update = () => setIsActive(editor.isActive(type));

    update(); // 초기 상태도 설정
    editor.on('selectionUpdate', update);
    editor.on('transaction', update);

    return () => {
      editor.off('selectionUpdate', update);
      editor.off('transaction', update);
    };
  }, [editor, type]);

  return isActive;
};
