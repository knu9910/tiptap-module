import { GoItalic } from 'react-icons/go';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Italic = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleItalic = () => editor.chain().toggleItalic().run();

  return (
    <button type='button' className={cn('hover:bg-gray-200 p-1', className)} onClick={toggleItalic}>
      <GoItalic className='size-6' />
    </button>
  );
};
