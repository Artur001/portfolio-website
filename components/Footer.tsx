export function Footer() {
  return (
    <footer className="w-full border-t border-glass-border/50 mt-20 pt-8 pb-12 text-center text-muted text-sm sm:text-base">
      <p>&copy; {new Date().getFullYear()} Artur Bytyqi. Built with Next.js, Tailwind CSS & Supabase.</p>
    </footer>
  );
}
