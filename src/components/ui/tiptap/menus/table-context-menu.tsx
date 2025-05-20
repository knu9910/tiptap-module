import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useEditorContext } from '../context/editor-context';

type Props = React.HTMLAttributes<HTMLElement>;

export const TableContextMenu = ({ className }: Readonly<Props>) => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  const editor = useEditorContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('td, th')) {
        event.preventDefault();
        setMenu({ x: event.clientX, y: event.clientY });
      } else {
        setMenu(null);
      }
    };
    const handleClick = (event: MouseEvent) => {
      if (menu) {
        const target = event.target as HTMLElement;
        setMenu(null);
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, [menu]);

  if (!menu) return null;

  return (
    <div
      ref={menuRef}
      style={{ position: 'fixed', top: menu.y, left: menu.x, zIndex: 9999 }}
      className={cn('bg-white border rounded shadow-lg p-2 flex flex-col gap-1 min-w-[160px]', className)}
    >
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 위에 추가
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 아래에 추가
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 삭제
      </button>
      <hr className="my-1" />
      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 왼쪽에 추가
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 오른쪽에 추가
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 삭제
      </button>
      <hr className="my-1" />
      <button
        onClick={() => editor.chain().focus().mergeCells().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 병합
      </button>
      <button
        onClick={() => editor.chain().focus().splitCell().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 분할
      </button>
      <hr className="my-1" />
      <button
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        셀 th/td 토글
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        행 th/td 토글
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        className="hover:bg-gray-100 px-2 py-1 text-left"
      >
        열 th/td 토글
      </button>
      <hr className="my-1" />
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="hover:bg-red-100 text-red-600 px-2 py-1 text-left"
      >
        테이블 삭제
      </button>
    </div>
  );
};
