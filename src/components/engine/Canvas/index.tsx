import type { CanvasModel } from "@defs/Canvas";

import { useNodeSystemContext } from "@contexts/nodeSystem";
import { useNodeFactoryContext } from "@contexts/nodeFactory";

import { Node } from "@components/engine/Node";

import "./style.css";

export function Canvas({
  baseId,
  contextCanvas = false,
}: CanvasModel) {
  const {
    nodeSystem,
  } = useNodeSystemContext()!;

  const {
    newNode,
  } = useNodeFactoryContext()!;

  const {
    removeNode,
  } = useNodeSystemContext()!;

  const nodes = nodeSystem[baseId]?.nodes || [];;

  return (<>
    <div className="canvas">
      <div className="nodes">
        {
          nodes.map(node => <Node
            key={node.id}
            showCanvas={!contextCanvas}
            node={{
              ...node,
              hasNext: !contextCanvas,
              context: !contextCanvas || node.isBase ? node.context : [
                {
                  id: `${node.id}:REMOVE`,
                  name: "Remove",
                  icon: "Trash",
                  color: "red",
                  action: () => removeNode(node.id!),
                }
              ],
            }}
          />)
        }

        <Node
          showCanvas={false}
          node={newNode(baseId)}
        />
      </div>
    </div>
  </>);
}

