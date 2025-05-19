import { MdFormatBold } from 'react-icons/md';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { BoldIcon } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const Bold = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleBold = () => editor.chain().toggleBold().run();

  return (
    <div className={cn('', className)} onClick={toggleBold}>
      <IconButtonWrapper>
        <IconButton>
          <BoldIcon />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
