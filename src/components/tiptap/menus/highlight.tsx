import { HiOutlineColorSwatch } from 'react-icons/hi';
import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Colors } from '../plugin/tiptap-font-config/constants';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Highlight = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const setHighlight = (color: string) => {
    editor.commands.setHighlight({ color: color });
  };

  return (
    <Popover>
      <PopoverTrigger className={cn('hover:bg-gray-200 flex px-2 cursor-pointer items-center', className)}>
        <HiOutlineColorSwatch />
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
