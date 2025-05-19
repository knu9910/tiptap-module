import { useEditorContext } from '../context/editor-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ImagePlus } from 'lucide-react';
import { IconButton } from './common/icon-button';
import { IconButtonWrapper } from './common/icon-button-wrapper';

type Props = React.HTMLAttributes<HTMLElement>;

export const Img = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const insertLocalImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        editor.chain().setImage({ src: base64Image }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Popover>
      <PopoverTrigger className={cn('', className)}>
        <IconButtonWrapper>
          <IconButton>
            <ImagePlus />
          </IconButton>
          <span className="text-sm hover:text-gray-900 text-gray-500">Add</span>
        </IconButtonWrapper>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">이미지 추가</h3>
          <Input
            type="file"
            accept="image/*"
            onChange={insertLocalImage}
            className="w-full cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
