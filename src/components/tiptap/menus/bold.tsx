import { FaBold } from 'react-icons/fa';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Bold = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleBold = () => editor.chain().toggleBold().run();

  return (
    <button className={cn('hover:bg-gray-200 p-2 rounded', className)} onClick={toggleBold}>
      <FaBold />
    </button>
  );
};
