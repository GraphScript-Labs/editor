import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

const createUnsavedChangesContext = () => {
  const UnsavedChangesContext = createContext<{
    unsavedChanges: boolean;
    setUnsavedChanges: (value: boolean) => void;
  } | undefined>(undefined);

  const UnsavedChangesProvider = ({ children }: {
    children: ReactNode
  }) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    const exposed = {
      unsavedChanges,
      setUnsavedChanges,
    };

    return (
      <UnsavedChangesContext.Provider value={exposed}>
        {children}
      </UnsavedChangesContext.Provider>
    );
  };

  const useUnsavedChangesContext = () => {
    return useContext(UnsavedChangesContext);
  };

  return {
    UnsavedChangesProvider,
    useUnsavedChangesContext,
  }
}

export const {
  UnsavedChangesProvider,
  useUnsavedChangesContext,
} = createUnsavedChangesContext();

