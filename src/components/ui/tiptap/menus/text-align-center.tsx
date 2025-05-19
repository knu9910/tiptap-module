import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { AlignCenter } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const TextAlignCenter = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const alignCenter = () => editor.chain().setTextAlign('center').run();

  return (
    <div className={cn('', className)} onClick={alignCenter}>
      <IconButtonWrapper>
        <IconButton>
          <AlignCenter />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
