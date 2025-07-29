import type { Suggestion, ToolButtonData } from "@defs/UI";

import { isDesktop } from "@utils/desktopTools";

import { WindowActions } from "@components/window/WindowActions";
import { ToolBar  } from "@components/window/ToolBar";
import { Palette  } from "@components/window/Palette";

import Logo from "@assets/GraphScript.png";
import "./style.css";

export function AppBar({
  tools=[],
  breadcrumb = "",
  generateSuggestions = () => [],
}: {
  tools?: ToolButtonData[];
  breadcrumb?: string;
  generateSuggestions?: (query: string) => Suggestion[];
}) {
  return (<>
    <div className="root-app-bar">
      {isDesktop() && <WindowActions />}
      <div
        className={[
          "root-app-bar-logo",
          isDesktop() ? "is-desktop" : "",
        ].join(" ")}
      >
        <img src={Logo} alt="GraphScript Engine" />
      </div>
      
      <ToolBar tools={tools} />

      <Palette generateSuggestions={generateSuggestions} />

      <div className="root-app-breadcrumb">
        <span>
          {breadcrumb}
        </span>
      </div>
    </div>
  </>);
}
