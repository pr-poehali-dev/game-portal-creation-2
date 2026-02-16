import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import games from "@/data/games";
import type { SystemRequirements } from "@/data/games";

const reqLabels: Record<keyof SystemRequirements, string> = {
  os: "ОС",
  processor: "Процессор",
  memory: "Оперативная память",
  graphics: "Видеокарта",
  storage: "Место на диске",
};

const RequirementsTable = ({
  title,
  reqs,
}: {
  title: string;
  reqs: SystemRequirements;
}) => (
  <div className="space-y-4">
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
      {title}
    </h3>
    <div className="space-y-3">
      {(Object.keys(reqs) as (keyof SystemRequirements)[]).map((key) => (
        <div key={key} className="flex justify-between items-baseline gap-4">
          <span className="text-sm text-muted-foreground shrink-0">{reqLabels[key]}</span>
          <span className="text-sm text-right">{reqs[key]}</span>
        </div>
      ))}
    </div>
  </div>
);

const GamePage = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-semibold mb-4">Игра не найдена</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={game.cover}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-32 relative z-10 pb-16">
        <div className="animate-fade-in-up space-y-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={14} />
              Каталог
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{game.title}</h1>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="secondary">{game.genre}</Badge>
                  <span className="text-sm text-muted-foreground">
                    Версия {game.version}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(game.releaseDate).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold gap-2 shrink-0"
              >
                <Icon name="Download" size={18} />
                Скачать ({game.fileSize})
              </Button>
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Об игре</h2>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {game.description}
                </p>
              </div>

              <Separator className="bg-border/50" />

              <div>
                <h2 className="text-xl font-semibold mb-6">Системные требования</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-5 rounded-xl bg-card border border-border/50">
                    <RequirementsTable title="Минимальные" reqs={game.minimum} />
                  </div>
                  <div className="p-5 rounded-xl bg-card border border-border/50">
                    <RequirementsTable title="Рекомендуемые" reqs={game.recommended} />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-card border border-border/50 space-y-4">
                <h3 className="font-semibold">Информация</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Жанр</span>
                    <span>{game.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Размер</span>
                    <span>{game.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Версия</span>
                    <span>{game.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дата выхода</span>
                    <span>
                      {new Date(game.releaseDate).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-white text-black hover:bg-white/90 font-semibold gap-2"
                size="lg"
              >
                <Icon name="Download" size={18} />
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 GameVault. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default GamePage;