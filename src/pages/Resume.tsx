
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-xl font-semibold">Resume - Swarnim Shrestha</h1>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <iframe
            src="/Swarnim_Resume.pdf"
            className="w-full h-[calc(100vh-8rem)]"
            title="Swarnim Shrestha Resume"
          />
        </div>
      </main>
    </div>
  );
};

export default Resume;
