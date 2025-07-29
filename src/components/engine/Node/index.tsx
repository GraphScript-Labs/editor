import {
  useCallback,
  useState,
} from "react";

import type { NodeModel } from "@defs/Node";

import { useUnsavedChangesContext } from "@utils/unsavedChanges";

import { DynamicIcon } from "@components/commons/DynamicIcon";
import { Glass } from "@components/commons/Glass";
import { Input } from "@components/commons/Input";

import "./style.css";

export function Node({
  node,
  forcedActive = false,
}: {
  node: NodeModel;
  forcedActive?: boolean;
}) {
  const {
    setUnsavedChanges,
  } = useUnsavedChangesContext()!;

  const [active, setActive] = useState(false);
  const [baseType, setBaseType] = useState<string>(node.baseType || "text");

  const handleClick: () => void = useCallback(() => {
    if (node.action) node.action();
    else setActive(prev => !prev);
  }, [node]);

  const switchBaseType = useCallback((type: string) => {
    node.baseType = type;
    setBaseType(type);
    setUnsavedChanges(true);
  }, [setUnsavedChanges, node]);

  return (<>
    <div className="node-wrapper">
      <Glass
        className={[
          "node",
          (active || forcedActive) ? "active" : "",
        ].join(" ")}
        style={{ color: node.color }}
        onClick={handleClick}
      >
        <span className="node-background" />
        
        <div className="node-icon-container">
          <DynamicIcon className="node-icon" icon={node.icon} />
        </div>
        
        <div className="node-name">
          {node.name}
        </div>

        {node.hasNext && (
          <div className="node-pointer">
            <DynamicIcon className="node-pointer-icon" icon="ChevronRight" />
          </div>
        )}
      </Glass>
      
      {node.context && (
        <Glass
          className={[
            "node-context",
            node.context.length > 20 ? "left" : "",
          ].join(" ")}
        >
          {
            node.context?.map((contextNode => <Node
              key={contextNode.name}
              node={contextNode}
            />))
          }

          {node.isBase && (<>
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
                onChange={(event) => {
                  node.value = event.target.value;
                  setUnsavedChanges(true);
                }}
              />
            </div>
          </>)}
        </Glass>
      )}
    </div>
  </>);
}

