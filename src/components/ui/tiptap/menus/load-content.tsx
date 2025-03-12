import { useEditorContext } from '../context/editor-context';
import { useContentStore } from '../plugin';
import { useEffect } from 'react';

type LoadContentProps = {
  keyPath: string;
};

export const LoadContent = ({ keyPath }: LoadContentProps) => {
  const editor = useEditorContext();
  const { tempContent, setContent, getLocalContent } = useContentStore();

  useEffect(() => {
    getLocalContent(keyPath);
  }, []);
  const handleLoadTempContent = () => {
    if (tempContent) {
      editor.chain().setContent(tempContent).run();
      setContent(tempContent); // 불러온 tempContent를 에디터에 반영
    }
  };
  return <div onClick={handleLoadTempContent}>불러오기</div>;
};
