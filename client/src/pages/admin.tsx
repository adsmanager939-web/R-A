import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ShieldAlert, LogOut, RefreshCw, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { ContactSubmission } from "@shared/schema";

const SESSION_KEY = "tc_admin_auth";

const SCAM_LABELS: Record<string, string> = {
  romance: "Romance Scam",
  crypto: "Crypto Fraud",
  investment: "Investment Scam",
  business: "Business Fraud",
  other: "Other",
};

function LoginScreen({ onLogin }: { onLogin: (pw: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const res = await fetch("/api/contact-submissions", {
      headers: { Authorization: password },
    });
    if (res.ok) {
      sessionStorage.setItem(SESSION_KEY, password);
      onLogin(password);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f2438] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#000000] rounded-full p-4 mb-4">
            <ShieldAlert className="w-8 h-8 text-[#FFD700]" />
          </div>
          <h1 className="text-2xl font-bold text-[#000000]">Admin Access</h1>
          <p className="text-gray-500 text-sm mt-1">Refund & Associates</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="input-admin-password"
            className="text-center"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm text-center flex items-center justify-center gap-1" data-testid="text-login-error">
              <AlertTriangle className="w-4 h-4" /> Incorrect password
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-[#000000] hover:bg-[#111111] text-white"
            data-testid="button-admin-login"
          >
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#000000] hover:text-[#FFD700] transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ password, onLogout }: { password: string; onLogout: () => void }) {
  const { data: submissions = [], isLoading, refetch } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
    queryFn: async () => {
      const res = await fetch("/api/contact-submissions", {
        headers: { Authorization: password },
      });
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    },
    refetchInterval: 30000,
  });

  const sorted = [...submissions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#000000] to-[#111111] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-[#FFD700]" />
          <div>
            <h1 className="font-bold text-lg leading-tight">Refund&Associates Admin</h1>
            <p className="text-white/60 text-xs">Contact Submissions</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => refetch()}
            className="text-white/80 hover:text-white hover:bg-white/10"
            data-testid="button-refresh"
          >
            <RefreshCw className="w-4 h-4 mr-1" /> Refresh
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-white/80 hover:text-white hover:bg-white/10"
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#000000] text-white rounded-xl px-4 py-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FFD700]" />
            <span className="font-semibold text-lg" data-testid="text-submission-count">{submissions.length}</span>
            <span className="text-white/70 text-sm">total leads</span>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-gray-400">Loading submissions...</div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-20 text-gray-400" data-testid="text-no-submissions">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No submissions yet</p>
            <p className="text-sm">New leads will appear here once people contact you.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sorted.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
                data-testid={`card-submission-${s.id}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-semibold text-[#000000] text-lg" data-testid={`text-name-${s.id}`}>{s.name}</p>
                    <p className="text-gray-500 text-sm">{new Date(s.createdAt).toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" })}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-[#000000] text-white hover:bg-[#000000]">
                      {SCAM_LABELS[s.scamType] ?? s.scamType}
                    </Badge>
                    {s.amountLost && (
                      <Badge variant="outline" className="border-[#FFD700] text-[#7B1418]">
                        Lost: {s.amountLost}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                  <p><span className="font-medium text-gray-700">Email:</span> <a href={`mailto:${s.email}`} className="text-[#000000] hover:underline" data-testid={`text-email-${s.id}`}>{s.email}</a></p>
                  <p><span className="font-medium text-gray-700">Phone:</span> <a href={`tel:${s.phone}`} className="text-[#000000] hover:underline" data-testid={`text-phone-${s.id}`}>{s.phone}</a></p>
                </div>
                {s.description && (
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 border-l-4 border-[#FFD700]">
                    <p className="font-medium text-gray-700 mb-1">Description:</p>
                    <p data-testid={`text-description-${s.id}`}>{s.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) setPassword(stored);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setPassword(null);
  };

  if (!password) {
    return <LoginScreen onLogin={setPassword} />;
  }

  return <Dashboard password={password} onLogout={handleLogout} />;
}
