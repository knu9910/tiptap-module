import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const TextAlignJustify = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const alignJustify = () => editor.chain().setTextAlign('justify').run();

  return (
    <div className={cn('', className)} onClick={alignJustify}>
      <IconButtonWrapper>
        <IconButton>
          <AlignJustify />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
