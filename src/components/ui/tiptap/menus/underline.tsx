import { MdFormatUnderlined } from 'react-icons/md';

import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const UnderLine = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleUnderline = () => editor.chain().toggleUnderline().run();

  return (
    <button className={cn('hover:bg-gray-200 p-1', className)} onClick={toggleUnderline}>
      <MdFormatUnderlined className="size-6" />
    </button>
  );
};
