import type { JSX, ReactNode } from "react";

import { PromptProvider } from "@contexts/prompt";
import { PaletteProvider } from "@contexts/palette";
import { VariablesProvider } from "@contexts/variables";
import { NodeSystemProvider } from "@contexts/nodeSystem";
import { NodeHistoryProvider } from "@contexts/nodeHistory";
import { NodeFactoryProvider } from "@contexts/nodeFactory";
import { AppDataProvider } from "@contexts/appData";
import { UnsavedChangesProvider } from "@contexts/unsavedChanges";

type ProviderType = ({ children }: {
  children: ReactNode;
}) => JSX.Element;

export function RootProvider({ children }: {
  children: ReactNode;
}) {
  const providers: ProviderType[] = [
    UnsavedChangesProvider,
    PromptProvider,
    PaletteProvider,
    VariablesProvider,
    NodeSystemProvider,
    NodeHistoryProvider,
    NodeFactoryProvider,
    AppDataProvider,
  ];

  return providers.reduceRight((acc, Provider) => {
    return (<>
      <Provider>
        {acc}
      </Provider>
    </>);
  }, children);
}

