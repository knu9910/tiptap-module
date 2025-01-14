"use client";
import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "../../components/tiptap/context/editor-context";
import {
  TipTapFontStyle,
  TipTapFontColor,
  TipTapFontSize,
  Bold,
  Italic,
  UnderLine,
  Strike,
  Highlight,
  Img,
  YoutubeLink,
  SavedContent,
  LoadContent,
  Preview,
  UrlLink,
} from "../../components/tiptap/menus";
import { useEffect } from "react";
import { useContentStore } from "@/components/tiptap/plugin";
type TipTapProps = {
  keyPath: string;
};

export const TiptapExample = ({ keyPath }: TipTapProps) => {
  const editor = useEditorContext();
  const { setContent } = useContentStore();

  useEffect(() => {
    setContent("");
  }, []);

  if (!editor) return null;

  return (
    <div>
      <div className="border border-gray-300 flex p-0.3 rounded-md">
        <TipTapFontStyle />
        <TipTapFontSize />
        <TipTapFontColor />
        <Bold />
        <Italic />
        <UnderLine />
        <Strike />
        <Highlight />
        <Img />
        <UrlLink />
        <YoutubeLink />
        <SavedContent keyPath={keyPath} />
        <LoadContent keyPath={keyPath} />
        <Preview />
      </div>
      <EditorContent
        editor={editor}
        className="border border-gray-300 p-4 ProseMirror focus:outline-none"
      />
    </div>
  );
};
