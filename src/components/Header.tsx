import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <Icon name="Gamepad2" size={18} className="text-black" />
          </div>
          <span className="font-semibold tracking-tight text-lg">GameVault</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Каталог
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;