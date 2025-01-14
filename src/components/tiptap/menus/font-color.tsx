import { FaFont } from 'react-icons/fa';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useEditorContext } from '../context/editor-context';
import { useFontConfigStore } from '../plugin';
import { Colors } from '../plugin/tiptap-font-config/constants';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const TipTapFontColor = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();
  const { setSelectedColor, selectedColor } = useFontConfigStore();

  if (!editor) return null;

  // 색상 변경 함수
  const changeTextColor = (color: Colors) => {
    if (color === '#FFFFFF') {
      setSelectedColor(Colors.Black);
    } else {
      setSelectedColor(color);
    }

    editor.chain().focus().setColor(color).run();
  };

  return (
    <>
      {/* 색상 선택 */}
      <Popover>
        <PopoverTrigger
          className={cn('hover:bg-gray-200 p-2 rounded cursor-pointer px-2 flex items-center', className)}
        >
          <FaFont style={{ color: selectedColor }} />
        </PopoverTrigger>
        <PopoverContent className="flex flex-wrap justify-around flex-col h-[160px] w-[200px] bg-slate-100 rounded-md">
          {Object.values(Colors).map((color, idx) => (
            <div
              key={color + idx}
              onClick={() => changeTextColor(color)}
              style={{ backgroundColor: color }}
              className="w-[16px] h-[16px] rounded-sm cursor-pointer"
            ></div>
          ))}
        </PopoverContent>
      </Popover>
    </>
  );
};
