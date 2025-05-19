import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Colors } from '../plugin/tiptap-font-config/constants';
import { cn } from '@/lib/utils';
import { Highlighter } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

type Props = React.HTMLAttributes<HTMLElement>;

export const Highlight = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const setHighlight = (color: string) => {
    editor.commands.setHighlight({ color: color });
  };

  return (
    <Popover>
      <PopoverTrigger className={cn('', className)}>
        <IconButtonWrapper>
          <IconButton>
            <Highlighter />
          </IconButton>
        </IconButtonWrapper>
      </PopoverTrigger>
      <PopoverContent className="flex flex-wrap justify-around flex-col h-[160px] w-[200px] bg-slate-100 rounded-md">
        {Object.values(Colors).map((color) => (
          <div
            key={color}
            onClick={() => setHighlight(color)} // Assuming setHighlight changes the background color of text
            className="w-[16px] h-[16px] rounded-sm "
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
