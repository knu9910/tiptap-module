import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FontOptions } from '../plugin/tiptap-font-config/constants';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const TipTapFontStyle = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const changeFont = (font: string) => {
    // 폰트 변경 적용
    editor.chain().setFontFamily(FontOptions[font]).run();
  };

  return (
    <>
      {/* 폰트 설정 메뉴 */}
      <Select onValueChange={changeFont}>
        <SelectTrigger
          className={cn('hover:bg-gray-200 rounded cursor-pointer w-2/12 flex justify-between', className)}
          tabIndex={-1}
        >
          <SelectValue placeholder={'맑은고딕'} /> {/* 선택된 폰트를 표시 */}
        </SelectTrigger>
        <SelectContent>
          {Object.keys(FontOptions).map((fontName) => (
            <SelectItem key={fontName} value={fontName}>
              {fontName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
