import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { ItalicIcon } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const Italic = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const toggleItalic = () => editor.chain().toggleItalic().run();

  return (
    <div className={cn('', className)} onClick={toggleItalic}>
      <IconButtonWrapper>
        <IconButton>
          <ItalicIcon />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
