export type ToolButtonData = {
  name: string;
  icon: string;
  action: () => void;
  disabled?: boolean;
  environment?: "desktop" | "web" | "all";
};

export type Suggestion = {
  name: string;
  icon: string;
  action: () => void;
}

