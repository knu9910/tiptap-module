import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';
import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight } from 'react-icons/md';

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
        <PopoverContent className='flex flex-col w-[100px]'>
          <button type='button' onClick={alignLeft} className={cn('hover:bg-gray-200 p-2', className)}>
            <FaAlignLeft />
            Left
          </button>
          <button type='button' onClick={alignCenter} className={cn('hover:bg-gray-200 p-1', className)}>
            <FaAlignCenter />
            Center
          </button>
          <button type='button' onClick={alignRight} className={cn('hover:bg-gray-200 p-1', className)}>
            <FaAlignRight />
            Right
          </button>
          <button type='button' onClick={alignJustify} className={cn('hover:bg-gray-200 p-1', className)}>
            <FaAlignJustify />
            Justify
          </button>
        </PopoverContent>
      </Popover>
    </>
  );
};
