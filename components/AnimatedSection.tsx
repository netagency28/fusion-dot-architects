"use client";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`opacity-0 translate-y-16 animate-fade-in-up ${className}`}>
      {children}
    </div>
  );
}

export { AnimatedSection }