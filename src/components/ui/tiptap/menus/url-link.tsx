import { useEditorContext } from '../context/editor-context';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';
import { IconButton } from './common/icon-button';
import { IconButtonWrapper } from './common/icon-button-wrapper';

type Props = React.HTMLAttributes<HTMLElement>;

export const UrlLink = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();
  const [link, setLink] = useState<string>('');
  const [open, setOpen] = useState(false);

  if (!editor) return null;

  const handleLinkClick = () => {
    if (link) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: link }).run();
      setLink('');
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn('', className)}>
        <IconButtonWrapper>
          <IconButton>
            <Link />
          </IconButton>
        </IconButtonWrapper>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">링크 추가</h3>
          <Input
            type="text"
            placeholder="https://example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full focus-visible:ring-0 border-gray-200 focus:border-blue-500 transition-colors"
          />
          <Button
            onClick={handleLinkClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all py-2.5 rounded-lg font-medium"
          >
            링크 추가
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
