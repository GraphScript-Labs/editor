import type { JSX, ReactNode } from "react";

import { PromptProvider } from "@utils/prompt";
import { PaletteProvider } from "@utils/palette";
import { VariablesProvider } from "@utils/variables";
import { NodeSystemProvider } from "@utils/nodeSystem";
import { NodeHistoryProvider } from "@utils/nodeHistory";
import { NodeFactoryProvider } from "@utils/nodeFactory";
import { AppDataProvider } from "@utils/appData";
import { UnsavedChangesProvider } from "@utils/unsavedChanges";

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

