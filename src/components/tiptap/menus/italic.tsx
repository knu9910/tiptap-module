import { RiItalic } from 'react-icons/ri';
import { useEditorContext } from '../context/editor-context';

type Props = React.HTMLAttributes<HTMLElement>;

export const Italic = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleItalic = () => editor.chain().toggleItalic().run();

  return (
    <button className={`hover:bg-gray-200 p-2 rounded ${className}`} onClick={toggleItalic}>
      <RiItalic />
    </button>
  );
};
