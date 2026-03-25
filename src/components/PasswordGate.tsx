import { useState } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('monumental_auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'monumentaldverhaak') {
      sessionStorage.setItem('monumental_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Monumental
          </h1>
          <p className="font-sans font-light text-muted-foreground">
            This page is password protected
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className="w-full font-sans font-light text-sm text-foreground bg-transparent border-b border-border py-3 px-0 placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
              autoFocus
            />
            {error && (
              <p className="font-sans font-light text-sm text-destructive mt-2">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full font-sans font-light text-sm text-background bg-foreground px-8 py-4 hover:bg-foreground/80 transition-colors duration-200 tracking-wide"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
