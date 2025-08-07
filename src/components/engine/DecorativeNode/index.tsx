import type { NodeModel } from "@defs/Node"

import { DynamicIcon } from "@components/commons/DynamicIcon";

import "./style.css";

export function DecorativeNode({
  node,
}: {
  node: NodeModel;
}) {
  return (<>
    <div className="decorative-node" style={{ color: node.color }}>
      <DynamicIcon className="decorative-node-icon" icon={node.icon} />
      <span className="decorative-node-name">{node.name}</span>
    </div>
  </>);
}

