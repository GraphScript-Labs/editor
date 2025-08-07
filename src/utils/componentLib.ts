import type { NodeModel } from "@defs/Node";

export const componentLib: {
  order?: number;
  name: string;
  color: string;
  icon: string;
  nodes: NodeModel[];
}[] = [
  {
    order: 1,
    name: "IO",
    color: "#FF5722",
    icon: "Terminal",
    nodes: [
      {
        name: "Output",
        code: "output",
        icon: "Terminal",
        color: "#FF5722"
      },
      {
        name: "Input",
        code: "input",
        icon: "TextCursorInput",
        color: "#FF5722"
      },
      {
        name: "Base",
        code: "base",
        icon: "Package",
        color: "#FF5722"
      },
      {
        name: "Endline",
        code: "endline",
        icon: "ArrowDown",
        color: "#FF5722"
      },
    ],
  },
  {
    order: 2,
    name: "Control",
    color: "#4CAF50",
    icon: "Command",
    nodes: [
      {
        name: "Component",
        code: "component",
        icon: "Layers",
        color: "#4CAF50"
      },
      {
        name: "Loop",
        code: "loop",
        icon: "Repeat",
        color: "#4CAF50"
      },
      {
        name: "If",
        code: "if",
        icon: "Split",
        color: "#4CAF50"
      },
    ],
  },
  {
    order: 3,
    name: "Base Conversion",
    color: "#9C27B0",
    icon: "Code",
    nodes: [
      {
        name: "Number",
        code: "numeric",
        icon: "Hash",
        color: "#9C27B0"
      },
      {
        name: "Boolean",
        code: "boolean",
        icon: "ToggleRight",
        color: "#9C27B0"
      },
      {
        name: "Text",
        code: "text",
        icon: "Type",
        color: "#9C27B0"
      },
    ],
  },
  {
    order: 4,
    name: "Storage",
    color: "#00BCD4",
    icon: "Database",
    nodes: [
      {
        name: "Script",
        code: "script",
        icon: "Code",
        color: "#00BCD4"
      },
      {
        name: "Save",
        code: "saves",
        icon: "Save",
        color: "#00BCD4"
      },
      {
        name: "Return",
        code: "returns",
        icon: "Reply",
        color: "#00BCD4"
      },
    ],
  },
  {
    order: 5,
    name: "Math",
    color: "#2196F3",
    icon: "Calculator",
    nodes: [
      {
        name: "Add",
        code: "add",
        icon: "Plus",
        color: "#2196F3"
      },
      {
        name: "Subtract",
        code: "subtract",
        icon: "Minus",
        color: "#2196F3"
      },
      {
        name: "Multiply",
        code: "multiply",
        icon: "X",
        color: "#2196F3"
      },
      {
        name: "Divide",
        code: "divide",
        icon: "Divide",
        color: "#2196F3"
      },
    ],
  },
  {
    order: 6,
    name: "Comparisons",
    color: "#E91E63",
    icon: "Scales",
    nodes: [
      {
        name: "Equals",
        code: "equals",
        icon: "Equal",
        color: "#E91E63"
      },
      {
        name: "Not Equals",
        code: "not_equals",
        icon: "EqualNot",
        color: "#E91E63"
      },
      {
        name: "Less Than",
        code: "less_than",
        icon: "ChevronLeft",
        color: "#E91E63"
      },
      {
        name: "Greater Than",
        code: "greater_than",
        icon: "ChevronRight",
        color: "#E91E63"
      },
      {
        name: "Less Than or Equal",
        code: "less_than_equal",
        icon: "ChevronsLeft",
        color: "#E91E63"
      },
      {
        name: "Greater Than or Equal",
        code: "greater_than_equal",
        icon: "ChevronsRight",
        color: "#E91E63"
      },
      {
        name: "Not",
        code: "not",
        icon: "CircleSlash",
        color: "#E91E63"
      },
    ],
  },
  {
    order: 7,
    name: "Collection",
    color: "#673AB7",
    icon: "List",
    nodes: [
      {
        name: "Collection",
        code: "collection",
        icon: "List",
        color: "#673AB7"
      },
      {
        name: "Push",
        code: "push",
        icon: "ListPlus",
        color: "#673AB7"
      },
      {
        name: "Pop",
        code: "pop",
        icon: "ListMinus",
        color: "#673AB7"
      },
      {
        name: "Update",
        code: "update",
        icon: "ListRestart",
        color: "#673AB7"
      },
      {
        name: "Size",
        code: "size",
        icon: "ListOrdered",
        color: "#673AB7"
      },
    ],
  },
];

