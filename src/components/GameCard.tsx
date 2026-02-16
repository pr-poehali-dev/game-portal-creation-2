import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <Link
      to={`/game/${game.id}`}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-border hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={game.cover}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight group-hover:text-white transition-colors">
              {game.title}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs">
              {game.genre.split(" / ")[0]}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {game.shortDescription}
          </p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="HardDrive" size={13} />
                {game.fileSize}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Tag" size={13} />
                v{game.version}
              </span>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-white transition-colors">
              Подробнее
              <Icon name="ArrowRight" size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;