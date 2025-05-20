import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useEditorContext } from '../context/editor-context';
import { CellSelection } from '@tiptap/pm/tables';

type Props = React.HTMLAttributes<HTMLElement>;

export const TableContextMenu = ({ className }: Readonly<Props>) => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  const [lastCellSelection, setLastCellSelection] = useState<any>(null);
  const editor = useEditorContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('td, th')) {
        event.preventDefault();
        // 현재 selection이 CellSelection이면 저장
        const sel = editor?.state?.selection;
        if (sel && sel instanceof CellSelection) {
          setLastCellSelection(sel);
        }
        setMenu({ x: event.clientX, y: event.clientY });
      } else {
        setMenu(null);
      }
    };
    const handleClick = () => {
      if (menu) setMenu(null);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, [menu, editor]);

  // 메뉴가 열려 있을 때 스크롤 막기
  useEffect(() => {
    if (menu) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [menu]);

  // selection 복원 함수
  const restoreSelection = () => {
    if (lastCellSelection && editor) {
      editor.view.dispatch(editor.state.tr.setSelection(lastCellSelection));
    }
  };

  // 공통 핸들러 함수
  const handleMenuAction = (command: () => void) => {
    restoreSelection();
    command();
    setMenu(null);
  };

  if (!menu) return null;

  return (
    <div
      ref={menuRef}
      style={{ position: 'fixed', top: menu.y, left: menu.x, zIndex: 9999 }}
      className={cn('bg-white border rounded shadow-lg p-2 flex flex-col gap-1 min-w-[160px]', className)}
    >
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().addRowBefore().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 위에 추가
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().addRowAfter().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 아래에 추가
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().deleteRow().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 삭제
      </button>
      <hr className="my-1" />
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().addColumnBefore().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 왼쪽에 추가
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().addColumnAfter().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 오른쪽에 추가
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().deleteColumn().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 삭제
      </button>
      <hr className="my-1" />
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().mergeCells().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 병합
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().splitCell().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 분할
      </button>
      <hr className="my-1" />
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().toggleHeaderCell().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 th/td 토글
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().toggleHeaderRow().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 th/td 토글
      </button>
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().toggleHeaderColumn().run())}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 th/td 토글
      </button>
      <hr className="my-1" />
      <button
        onClick={() => handleMenuAction(() => editor.chain().focus().deleteTable().run())}
        className="hover:bg-red-100 text-red-600 px-2 py-1 text-left"
      >
        테이블 삭제
      </button>
    </div>
  );
};
