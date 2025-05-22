import {
  markdownRenderOptions,
  parseSoundtrackMarkdown,
} from "../lib/helpers.tsx";
import { render } from "@deno/gfm";
import { Album } from "./Album.tsx";

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
            block.startsWith("#SOUNDTRACK")
              ? (
                <div className="card">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: render(
                        parseSoundtrackMarkdown(block).html.split(
                          "#SOUNDTRACKSLOT",
                        ).shift() ?? "",
                        markdownRenderOptions,
                      ),
                    }}
                  />
                  <Album {...parseSoundtrackMarkdown(block).data} />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: render(
                        block.split("#SOUNDTRACKSLOT").pop() ?? "",
                        markdownRenderOptions,
                      ),
                    }}
                  />
                </div>
              )
              : (
                <div
                  className="card"
                  dangerouslySetInnerHTML={{
                    __html: render(block, markdownRenderOptions),
                  }}
                />
              )
          )
      )}
    </div>
  );
}
