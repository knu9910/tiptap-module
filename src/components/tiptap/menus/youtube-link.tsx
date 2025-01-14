import { HiOutlinePaperClip } from 'react-icons/hi';
import { useEditorContext } from '../context/editor-context';
import { cn } from '@/lib/utils';
import { useVideoStore } from '../plugin';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type Props = React.HTMLAttributes<HTMLElement>;

export const YoutubeLink = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();
  const { videoUrl, setVideoUrl } = useVideoStore();
  if (!editor) return null;

  const addYouTubeVideo = () => {
    if (editor && videoUrl) {
      editor.chain().setYouTubeVideo(videoUrl).run();
      setVideoUrl(''); // URL 입력 필드 초기화
    }
  };

  return (
    <div className={cn('p-4', className)}>
      <Popover>
        {/* 유튜브 동영상 삽입 메뉴 */}
        <PopoverTrigger className="cursor-pointer">
          <HiOutlinePaperClip />
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
          <Input
            type="text"
            placeholder="유튜브 URL을 입력하세요"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <Button onClick={addYouTubeVideo} className="w-full">
            동영상 추가
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
