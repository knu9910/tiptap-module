import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';
import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const TextAlign = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const alignLeft = () => editor.chain().setTextAlign('left').run();
  const alignCenter = () => editor.chain().setTextAlign('center').run();
  const alignRight = () => editor.chain().setTextAlign('right').run();
  const alignJustify = () => editor.chain().setTextAlign('justify').run();

  return (
    <>
      {/* 글자 정렬 메뉴 */}
      <Popover>
        <PopoverTrigger className={cn('cursor-pointer', className)}>
          <FaAlignJustify />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col w-[100px]">
          <button onClick={alignLeft} className="p-2">
            <FaAlignLeft />
            Left
          </button>
          <button onClick={alignCenter} className="p-1">
            <FaAlignCenter />
            Center
          </button>
          <button onClick={alignRight} className="p-1">
            <FaAlignRight />
            Right
          </button>
          <button onClick={alignJustify} className="p-1">
            <FaAlignJustify />
            Justify
          </button>
        </PopoverContent>
      </Popover>
    </>
  );
};
