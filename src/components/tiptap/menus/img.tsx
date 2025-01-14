import { HiOutlinePhotograph } from 'react-icons/hi';
import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Img = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const insertLocalImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 첫 번째 파일 선택
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        console.log('File loaded successfully', base64Image); // base64 출력 확인

        // 이미지를 삽입하는 부분
        editor.chain().setImage({ src: base64Image }).run();
      };
      reader.readAsDataURL(file); // 파일을 base64로 읽기
    } else {
      console.log('No file selected');
    }
  };

  return (
    <Popover>
      {/* 이미지 삽입 메뉴 */}
      <PopoverTrigger className={cn('cursor-pointer', className)}>
        <HiOutlinePhotograph className="text-gray-700" />
      </PopoverTrigger>
      <PopoverContent className="p-4 w-64">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            insertLocalImage(e); // 이미지 삽입 함수 호출
          }}
          className="mb-4"
        />
      </PopoverContent>
    </Popover>
  );
};
