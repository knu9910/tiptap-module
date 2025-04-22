import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select/select';
import { FontOptions } from '../plugin/tiptap-font-config/constants';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { Md2kPlus } from 'react-icons/md';

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
          className={cn('w-full h-full border-0 focus:ring-0 focus:outline-none cursor-pointer', className)}
          tabIndex={-1}
        >
          <SelectValue placeholder='맑은고딕' />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(FontOptions).map((fontName) => (
            <SelectItem key={fontName} value={fontName} className='cursor-pointer'>
              {fontName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
