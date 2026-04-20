"use client";

import { useGame } from "../../game/useGame";
import { TopBar } from "../../components/TopBar";
import { ArtistCard } from "../../components/ArtistCard";
import { ProjectCard } from "../../components/ProjectCard";
import { BottomBar } from "../../components/BottomBar";

export default function DashboardPage(): JSX.Element {
  const { state, advanceWeek } = useGame();

  return (
    <main className="p-4 space-y-4 pb-24">
      <TopBar
        cash={state.cash}
        fans={state.fans}
        week={state.week}
      />

      <div className="flex gap-3 overflow-x-auto">
        {state.artists.map((a) => (
          <ArtistCard key={a.id} artist={a} />
        ))}
      </div>

      {state.projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}

      <BottomBar onNext={advanceWeek} />
    </main>
  );
}
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
