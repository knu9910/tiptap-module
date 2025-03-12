import { useContentStore } from '../plugin';

type SavedContentProps = {
  keyPath: string;
};

export const SavedContent = ({ keyPath }: SavedContentProps) => {
  const { saveTempContent, content } = useContentStore();

  return <div onClick={() => saveTempContent(keyPath, content)}>임시 저장</div>;
};
