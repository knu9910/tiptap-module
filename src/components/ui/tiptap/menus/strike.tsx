import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { Strikethrough } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const Strike = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleStrike = () => editor.chain().toggleStrike().run();

  return (
    <div className={cn('', className)} onClick={toggleStrike}>
      <IconButtonWrapper>
        <IconButton>
          <Strikethrough />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
