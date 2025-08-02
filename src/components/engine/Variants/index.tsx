import { BaseVariant } from "@components/engine/BaseVariant";

import type { NodeModel } from "@defs/Node";

export function Variants({
  node,
}: {
  node: NodeModel;
}) {
  return (<>
    <BaseVariant node={node} />
  </>);
}

