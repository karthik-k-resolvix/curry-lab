import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/Logo.png"
            width={36}
            height={36}
            alt="Resolvix logo"
            className="block"
          />
        </Link>
              <span className="font-heading font-bold text-xl">Resolvix</span>
            </div>
            <p className="text-background/70 text-sm">
              Automate Smarter. Scale Faster. Grow Effortlessly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Automation Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("cta");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Book Audit
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("faq");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@resolvix.com"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Integrations</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Email</li>
              <li>Zendesk</li>
              <li>And more...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2024 Resolvix. All rights reserved.</p>
            <p className="text-center md:text-right">
              🌟 Automate Smarter. Scale Faster. Grow Effortlessly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
