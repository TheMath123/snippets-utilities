import { ReactNode, createContext, useContext, useState } from "react";

interface IChildrenProps {
  children: ReactNode;
}

// Context - values
interface IContextNameProps {
  stage: boolean;
}

// Context - In case you need to set default values within context
export const ContextName = createContext({} as IContextNameProps);

// Context Provider
export function ContextNameProvider({ children }: IChildrenProps) {
  const [stage, setStage] = useState(false);
  return (
    <ContextName.Provider
      value={{
        stage,
      }}
    >
      {children}
    </ContextName.Provider>
  );
}

// Hack Hook
export function useHookName() {
  return useContext(ContextName);
}
