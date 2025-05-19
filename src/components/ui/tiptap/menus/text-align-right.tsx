import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { AlignRight } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const TextAlignRight = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const alignRight = () => editor.chain().setTextAlign('right').run();

  return (
    <div className={cn('', className)} onClick={alignRight}>
      <IconButtonWrapper>
        <IconButton>
          <AlignRight />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
