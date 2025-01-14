import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pxs } from '../plugin/tiptap-font-config/constants';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const TipTapFontSize = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const changeFontSize = (size: Pxs) => {
    editor.chain().setFontSize(size).run();
  };

  return (
    <>
      {/* 폰트 크기 설정 메뉴 */}
      <Select onValueChange={changeFontSize}>
        <SelectTrigger
          className={cn(
            'hover:bg-gray-200 p-2 rounded font-bold flex justify-center w-1/12 px-2 cursor-pointer',
            className,
          )}
        >
          <SelectValue placeholder={'12px'} /> {/* 선택된 폰트 크기를 표시 */}
        </SelectTrigger>
        <SelectContent className="h-72 w-48 rounded-md border overflow-y-auto">
          {Object.values(Pxs).map((px) => (
            <SelectItem key={px} value={px}>
              {px}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
