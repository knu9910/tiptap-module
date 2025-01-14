import { RxUnderline } from 'react-icons/rx';

import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const UnderLine = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleUnderline = () => editor.chain().toggleUnderline().run();

  return (
    <button className={cn('hover:bg-gray-200 p-2 rounded', className)} onClick={toggleUnderline}>
      <RxUnderline />
    </button>
  );
};
