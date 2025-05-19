import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { AlignLeft } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const TextAlignLeft = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const alignLeft = () => editor.chain().setTextAlign('left').run();

  return (
    <div className={cn('', className)} onClick={alignLeft}>
      <IconButtonWrapper>
        <IconButton>
          <AlignLeft />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
