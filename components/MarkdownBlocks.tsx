import { markdownRenderOptions } from "../lib/helpers.tsx";
import { render } from "@deno/gfm";

const blockSeperator: RegExp = new RegExp("[\r\n]+---[\r\n]+");

export type MarkdownBlocksProps = {
  content: string;
};

const defaultProps = {
  content: "",
};

export function MarkdownBlocks(props: MarkdownBlocksProps) {
  props = { ...defaultProps, ...props };
  const blocks = props.content.split(blockSeperator);
  return (
    <div class="flex flex-col gap-4">
      {blocks.map((block) =>
        block.startsWith("# ")
          ? (
            <div
              class="ml-6 mt-4"
              dangerouslySetInnerHTML={{
                __html: render(block, markdownRenderOptions),
              }}
            />
          )
          : (
            <div
              className="card"
              dangerouslySetInnerHTML={{
                __html: render(block, markdownRenderOptions),
              }}
            />
          )
      )}
    </div>
  );
}
