import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import Icon from "@/components/ui/icon";
import games from "@/data/games";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-2 mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Каталог игр</h1>
          <p className="text-muted-foreground text-lg">
            {games.length} {games.length === 1 ? "игра" : games.length < 5 ? "игры" : "игр"} доступно для скачивания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <a
            href="https://t.me/DalbaebGame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Icon name="Send" size={16} />
            Telegram-канал
          </a>
          <span>© 2026 GameVault. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;