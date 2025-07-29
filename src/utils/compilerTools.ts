import { saveFile } from '@utils/desktopTools';

import {
  type NodeModel,
  type NodeGroup,
  type NodeSystem,
  BasePrefixes,
} from "@defs/Node";

const setupCompilerTools = () => {
  const generateScript = (
    nodeSystem: NodeSystem,
    entries: string[],
  ) => {
    let script: string = "";
    
    const addToScript = (
      group: NodeGroup,
      level: number = 0,
    ) => {
      const nodes: NodeModel[] = group.nodes;
      if (nodes.length === 0) return;
      
      const indents: string = " ".repeat(level);
      for (const node of nodes) {
        if (node.isBase) {
          const basePrefix = BasePrefixes[node.baseType || "text"];
          script += `${indents}${basePrefix}${node.value || ""}\n`;
          continue;
        }
        
        script += `${indents}${node.code}\n`;
        if (!nodeSystem[node.id!]) continue;
        addToScript(nodeSystem[node.id!], level + 1);
      }
    };

    for (const entryPoint of entries) {
      addToScript(nodeSystem[entryPoint]);
    }

    return script;
  };

  const downloadScript = (
    nodeSystem: NodeSystem,
    entries: string[],
  ) => {
    const script = generateScript(nodeSystem, entries);
    saveFile(
      script,
      "project.gsam",
      [
        "GraphScript (*.gsam)",
        "All files (*.*)",
      ],
    );
  };

  return {
    generateScript,
    downloadScript,
  };
}

export const {
  generateScript,
  downloadScript,
} = setupCompilerTools();

