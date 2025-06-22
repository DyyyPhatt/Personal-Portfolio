import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <div className="text-center max-w-lg">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-primary mb-3">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>

        {/* Button to go back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};
