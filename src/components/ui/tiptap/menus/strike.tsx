import { FaStrikethrough } from 'react-icons/fa';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Strike = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleStrike = () => editor.chain().toggleStrike().run();

  return (
    <button type='button' className={cn('hover:bg-gray-200 p-2 rounded', className)} onClick={toggleStrike}>
      <FaStrikethrough />
    </button>
  );
};
