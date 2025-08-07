import type { NodeModel } from "@defs/Node";

import { Glass } from "@components/commons/Glass";

import { Canvas } from "@components/engine/Canvas";
import { Node } from "@components/engine/Node";
import { Variants } from "@components/engine/Variants";

import "./style.css";

export function NodeContext({
  node,
  showCanvas = false,
}: {
  node: NodeModel;
  showCanvas?: boolean;
}) {
  if (node.context?.length === 0) return null;
  if (!node.context) return null;

  const context = node.context;
  const isBase = node.isBase;
  const nodeId = node.id!;

  return (<>
    <Glass
      className={[
        "node-context",
        context.length > 20 ? "side" : "",
      ].join(" ")}
    >
      {
        context?.map((contextNode => <Node
          key={contextNode.id}
          node={contextNode}
        />))
      }

      {
        (!isBase && showCanvas) && (<>
          <Glass className="context-canvas">
            <Canvas baseId={nodeId} />
          </Glass>
        </>)
      }

      <Variants node={node} />
    </Glass>
  </>);
}