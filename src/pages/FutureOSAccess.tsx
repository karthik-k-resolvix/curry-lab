import { Button } from "../../client/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FORM_EMBED_URL = "PASTE_GOOGLE_FORM_EMBED_URL_HERE";

export default function FutureOSAccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 px-4 py-10">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-background/40 backdrop-blur p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              FutureOS Early Access
            </h1>
            <p className="text-muted-foreground">
              Start with the short intake below. After this, continue to the final submission form.
            </p>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-border">
            <iframe
              title="FutureOS Intake"
              src={FORM_EMBED_URL}
              className="w-full"
              style={{ height: 900 }}
              frameBorder={0}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 text-primary rounded-lg font-semibold h-11 px-6"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 px-6"
              onClick={() => navigate("/futureos-access/apply")}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
