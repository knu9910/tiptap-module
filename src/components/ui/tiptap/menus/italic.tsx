import { GoItalic } from 'react-icons/go';
import { useEditorContext } from '../context/editor-context';

type Props = React.HTMLAttributes<HTMLElement>;

export const Italic = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleItalic = () => editor.chain().toggleItalic().run();

  return (
    <button className={`hover:bg-gray-200 p-1 ${className}`} onClick={toggleItalic}>
      <GoItalic className="size-6" />
    </button>
  );
};
