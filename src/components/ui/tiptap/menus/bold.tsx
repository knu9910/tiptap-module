import { MdFormatBold } from 'react-icons/md';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Bold = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleBold = () => editor.chain().toggleBold().run();

  return (
    <button className={cn('hover:bg-gray-200 p-1', className)} onClick={toggleBold}>
      <MdFormatBold className="size-6" />
    </button>
  );
};
