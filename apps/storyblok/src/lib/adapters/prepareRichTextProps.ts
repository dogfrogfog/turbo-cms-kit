import type { IRichTextProps } from "@shared/ui/components/ui/richText/types";
import type { ISbRichtext, SbBlokData } from "@storyblok/react/rsc";

import renderRichText from "../renderRichText";

export interface IRichTextBlok extends SbBlokData {
  content: ISbRichtext;
  removeInnerMargins?: boolean;
}

export const prepareRichTextProps = (props: IRichTextBlok): IRichTextProps => {
  return {
    richText: renderRichText(props.content),
    removeInnerMargins: props.removeInnerMargins,
  };
};
