import { HiLink } from 'react-icons/hi'; // 'react-icons/hi'에서 Link 아이콘을 임포트
import { useEditorContext } from '../context/editor-context';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const UrlLink = () => {
  const editor = useEditorContext();
  const [link, setLink] = useState<string>('');
  const [open, setOpen] = useState(false); // Popover 열기 상태

  if (!editor) return null;

  const handleLinkClick = () => {
    if (link) {
      // 현재 선택된 텍스트에 링크 추가
      editor.chain().focus().extendMarkRange('link').setLink({ href: link }).run();
      setLink(''); // 링크 추가 후 입력 필드 초기화
      setOpen(false); // Popover 닫기
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="hover:bg-gray-200 flex items-center h-[100%] p-2">
          <HiLink /> {/* react-icons에서 아이콘 사용 */}
        </PopoverTrigger>

        <PopoverContent className="w-72 p-4 bg-white border rounded-md shadow-md">
          <div>
            <h3 className="text-lg font-semibold mb-2">링크 추가</h3>

            <Input
              type="text"
              placeholder="링크를 넣어주세요"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />

            <Button
              onClick={handleLinkClick}
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              링크 넣기
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
