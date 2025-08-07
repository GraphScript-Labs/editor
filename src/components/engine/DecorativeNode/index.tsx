import type { NodeModel } from "@defs/Node"

import "./style.css";

export function DecorativeNode({
  node,
}: {
  node: NodeModel;
}) {
  return (<>
    <div className="decorative-node">
      <span className="decorative-node-name">{node.name}</span>
    </div>
  </>);
}

