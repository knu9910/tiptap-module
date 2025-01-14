"use client";
import { EditorProvider } from "@/components/tiptap/context/editor-context";
import { cn } from "@/lib/utils";
import { TiptapExample } from "../../components/tiptap/core/tiptap-example";
import { TiptapViewer } from "@/components/tiptap/core";
import { useContentStore } from "@/components/tiptap/plugin";

type Props = React.HTMLAttributes<HTMLElement>;

export const ComponentExample = ({ className }: Readonly<Props>) => {
  const { content } = useContentStore();

  return (
    <div className={cn("", className)}>
      <EditorProvider>
        <TiptapExample keyPath="1" />
      </EditorProvider>
      <h2 className="mb-3 mt-6 text-xl font-semibold">너는 viewer야 </h2>
      <TiptapViewer className="border p-4" content={content} />
    </div>
  );
};
