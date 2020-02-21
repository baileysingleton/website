/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Resume from "../components/Resume/Resume";
import { resumeViewer } from "../css/style";

export default function ResumeViewer() {
  return (
    <div css={resumeViewer}>
      <Resume />
    </div>
  );
}
