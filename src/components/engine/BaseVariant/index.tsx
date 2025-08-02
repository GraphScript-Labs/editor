import { useCallback, useState } from "react";

import type { NodeModel } from "@defs/Node";

import { useNodeSystemContext } from "@contexts/nodeSystem";

import { Input } from "@components/commons/Input";
import { Node } from "@components/engine/Node";

import "./style.css";

export function BaseVariant({
  node,
}: {
  node: NodeModel;
}) {
  const { updateNode } = useNodeSystemContext()!;

  const [
    baseType,
    setBaseType,
  ] = useState<string>(node.baseType || "text");

  const switchBaseType = useCallback((type: string) => {
    node.baseType = type;
    setBaseType(type);
    updateNode(node.id!, node);
  }, [updateNode, node]);

  const changeValue = useCallback((value: string) => {
    node.value = value;
    updateNode(node.id!, node);
  }, [updateNode, node]);

  if (!node.isBase) return null;

  return (<>
    <Node
      forcedActive={baseType === "text"}
      node={{
        color: "#000",
        icon: "Type",
        name: "Text Type",
        action: () => switchBaseType("text"),
      }}
    />

    <Node
      forcedActive={baseType === "numeric"}
      node={{
        color: "#000",
        icon: "Hash",
        name: "Numeric Type",
        action: () => switchBaseType("numeric"),
      }}
    />

    <Node
      forcedActive={baseType === "boolean"}
      node={{
        color: "#000",
        icon: "ToggleRight",
        name: "Boolean Type",
        action: () => switchBaseType("boolean"),
      }}
    />

    <div className="node-base-input">
      <Input
        placeholder="Base Node Value"
        defaultValue={node.value || ""}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  </>);
}

