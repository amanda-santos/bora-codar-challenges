import { useState } from "react";

import { Button } from "./components/Button";
import { ButtonsTable } from "./containers/ButtonsTable";

export const App = () => {
  const [primaryButtonState, setPrimaryButtonState] = useState({
    isLoading: false,
    isDisabled: false,
  });

  const [secondaryButtonState, setSecondaryButtonState] = useState({
    isLoading: false,
    isDisabled: false,
  });

  const [tertiaryButtonState, setTertiaryButtonState] = useState({
    isLoading: false,
    isDisabled: false,
  });

  return (
    <div className="h-screen bg-darkPurple-900 text-white flex gap-20 xl:flex-row flex-col">
      <main className="flex flex-col items-start justify-start pt-28 pb-8 lg:py-28 px-20">
        <h1 className="text-3xl mb-2">Button types</h1>
        <p className="text-xl text-gray-300">
          Within a layout, buttons serve to highlight important actions to be
          taken. Below is an example of types and properties (available in
          desktop).
        </p>

        <ButtonsTable />
      </main>

      <aside className="bg-darkPurple-800 py-28 px-20">
        <h1 className="text-3xl mb-2">Test the buttons</h1>
        <p className="text-xl text-gray-300">
          Interact with the buttons and watch the appearance and cursors change.
        </p>

        <div className="mt-16 flex flex-col gap-8">
          <Button
            title="Interact with me"
            isLoading={primaryButtonState.isLoading}
            disabled={primaryButtonState.isDisabled}
            onClick={() => {
              setPrimaryButtonState((prevState) => ({
                ...prevState,
                isLoading: true,
              }));
              setTimeout(() => {
                setPrimaryButtonState({
                  isDisabled: true,
                  isLoading: false,
                });
              }, 1000);
            }}
          />

          <Button
            title="Interact with me"
            variant="secondary"
            isLoading={secondaryButtonState.isLoading}
            disabled={secondaryButtonState.isDisabled}
            onClick={() => {
              setSecondaryButtonState((prevState) => ({
                ...prevState,
                isLoading: true,
              }));
              setTimeout(() => {
                setSecondaryButtonState({
                  isDisabled: true,
                  isLoading: false,
                });
              }, 1000);
            }}
          />

          <Button
            title="Interact with me"
            variant="tertiary"
            isDraggable
            isLoading={tertiaryButtonState.isLoading}
            disabled={tertiaryButtonState.isDisabled}
            onClick={() => {
              setTertiaryButtonState((prevState) => ({
                ...prevState,
                isLoading: true,
              }));
              setTimeout(() => {
                setTertiaryButtonState({
                  isDisabled: true,
                  isLoading: false,
                });
              }, 1000);
            }}
          />
        </div>
      </aside>
    </div>
  );
};
