import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { Underline } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const UnderLine = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleUnderline = () => editor.chain().toggleUnderline().run();

  return (
    <div className={cn('', className)} onClick={toggleUnderline}>
      <IconButtonWrapper>
        <IconButton>
          <Underline />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
