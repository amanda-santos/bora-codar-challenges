import { Player } from "./components/Player";

export const App = () => {
  return (
    <main className="grid h-full place-content-center content-center justify-items-center gap-8 py-10 text-gray-light sm:h-screen lg:grid-cols-2 lg:px-40 xl:px-72 2xl:px-96">
      <Player variant="lg" />
      <Player variant="md" />
      <Player variant="sm" />
    </main>
  );
};
