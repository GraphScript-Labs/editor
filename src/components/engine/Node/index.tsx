import {
  useCallback,
  useState,
} from "react";

import type { NodeModel } from "@defs/Node";

import { useNodeSystemContext } from "@contexts/nodeSystem";

import { DynamicIcon } from "@components/commons/DynamicIcon";
import { Glass } from "@components/commons/Glass";
import { Input } from "@components/commons/Input";

import { Canvas } from "@components/engine/Canvas";

import "./style.css";

export function Node({
  node,
  showCanvas = false,
  forcedActive = false,
}: {
  node: NodeModel;
  showCanvas?: boolean;
  forcedActive?: boolean;
}) {
  const { updateNode } = useNodeSystemContext()!;

  const [active, setActive] = useState(false);
  const [baseType, setBaseType] = useState<string>(node.baseType || "text");

  const handleClick: () => void = useCallback(() => {
    if (node.action) node.action();
    else setActive(prev => !prev);
  }, [node]);

  const switchBaseType = useCallback((type: string) => {
    node.baseType = type;
    setBaseType(type);
    updateNode(node.id!, node);
  }, [updateNode, node]);

  const changeValue = useCallback((value: string) => {
    node.value = value;
    updateNode(node.id!, node);
  }, [updateNode, node]);

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
      
      {(node.context?.length !== 0) && node.context && (
        <Glass
          className={[
            "node-context",
            node.context.length > 20 ? "side" : "",
          ].join(" ")}
        >
          {
            node.context?.map((contextNode => <Node
              key={contextNode.name}
              node={contextNode}
            />))
          }

          {
            (!node.isBase && showCanvas) && (<>
              <Glass className="context-canvas">
                <Canvas
                  baseId={node.id!}
                  contextCanvas={true}
                />
              </Glass>
            </>)
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
                onChange={(e) => changeValue(e.target.value)}
              />
            </div>
          </>)}
        </Glass>
      )}
    </div>
  </>);
}

