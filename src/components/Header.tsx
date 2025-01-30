import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text">
          UniVibe
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/crowdfunding" className="text-foreground/80 hover:text-foreground">
            Crowdfunding
          </Link>
          <Link to="/feed" className="text-foreground/80 hover:text-foreground">
            Dynamic Feed
          </Link>
          <Link to="/food" className="text-foreground/80 hover:text-foreground">
            Food Review
          </Link>
          <Link to="/events" className="text-foreground/80 hover:text-foreground">
            Event Hosting
          </Link>
          <Link to="/mental-health" className="text-foreground/80 hover:text-foreground">
            Mental Health
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;