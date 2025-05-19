import { cn } from '@/lib/utils';
import { useEditorContext } from '../context/editor-context';
import { Table as TableIcon } from 'lucide-react';
import { IconButtonWrapper } from './common/icon-button-wrapper';
import { IconButton } from './common/icon-button';

// 3x3 테이블을 삽입하는 기능
const DEFAULT_ROWS = 3;
const DEFAULT_COLS = 3;

type Props = React.HTMLAttributes<HTMLElement>;

export const Table = ({ className }: Readonly<Props>) => {
  const editor = useEditorContext();

  if (!editor) return null;

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: DEFAULT_ROWS, cols: DEFAULT_COLS, withHeaderRow: true }).run();
  };

  return (
    <div className={cn('', className)} onClick={insertTable}>
      <IconButtonWrapper>
        <IconButton>
          <TableIcon />
        </IconButton>
      </IconButtonWrapper>
    </div>
  );
};
