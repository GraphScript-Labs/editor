import {
  useCallback,
  useState,
} from "react";

import type { NodeModel } from "@defs/Node";

import { DynamicIcon } from "@components/commons/DynamicIcon";
import { Glass } from "@components/commons/Glass";

import { NodeContext } from "@components/engine/NodeContext";
import { DecorativeNode } from "@components/engine/DecorativeNode";

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
  const [active, setActive] = useState(false);

  const handleClick: () => void = useCallback(() => {
    if (node.action) node.action();
    else setActive(prev => !prev);
  }, [node]);

  if (node.isDecorative) return <DecorativeNode node={node} />;

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
      
      <NodeContext
        node={node}
        showCanvas={showCanvas}
      />
    </div>
  </>);
}

