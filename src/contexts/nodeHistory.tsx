import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

const createNodeHistoryContext = () => {
  const NodeHistoryContext = createContext<{
    activeNode: string;
    openNode: (nodeId: string, topLevel?: boolean) => void;
    closeNode: () => void;
    nodeHistory: RefObject<string[]>;
  } | undefined>(undefined);

  const NodeHistoryProvider = ({ children }: {
    children: ReactNode;
  }) => {
    const nodeHistory = useRef<string[]>([]);
    const [activeNode, setActiveNode] = useState<string>("ENTRY");
    
    const openNode = useCallback((
      nodeId: string,
      topLevel: boolean = false,
    ) => {
      setActiveNode(active => {
        nodeHistory.current.push(active);
        if (topLevel) nodeHistory.current = [];
        return nodeId;
      });
    }, []);

    const closeNode = useCallback(() => {
      setActiveNode(nodeHistory.current.pop()!);
    }, []);

    const exposed = {
      activeNode,
      openNode,
      closeNode,
      nodeHistory,
    };

    return (<>
      <NodeHistoryContext.Provider value={exposed}>
        {children}
      </NodeHistoryContext.Provider>
    </>);
  };

  const useNodeHistoryContext = () => {
    return useContext(NodeHistoryContext);
  };

  return {
    NodeHistoryProvider,
    useNodeHistoryContext,
  };
};

export const {
  NodeHistoryProvider,
  useNodeHistoryContext,
} = createNodeHistoryContext();
  
