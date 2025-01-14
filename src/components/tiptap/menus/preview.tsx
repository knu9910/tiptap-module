import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useContentStore, usePreviewStore } from '../plugin';
import { Button } from '@/components/ui/button';
import { TiptapViewer } from '../core';
export const Preview = () => {
  const { isPreviewOpen, closePreview, openPreview } = usePreviewStore();
  const { content } = useContentStore();

  return (
    <>
      <div onClick={openPreview}>미리보기</div>
      {/* 미리보기 팝업 */}
      <Dialog open={isPreviewOpen} onOpenChange={closePreview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>미리보기</DialogTitle>

            {/* TiptapViewer 컴포넌트 사용하여 미리보기 */}
            {content ? (
              <TiptapViewer content="" />
            ) : (
              <></> // 기본 메시지 추가
            )}
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closePreview}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
