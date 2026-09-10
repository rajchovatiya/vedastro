export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ivory text-center">
      <span className="eyebrow">Lost among the stars</span>
      <h1 className="text-4xl">Page not found</h1>
      <a href="/" className="text-gold-deep underline">
        Return home
      </a>
    </div>
  );
}
