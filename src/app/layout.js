import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Safety Equipment Manufacturing</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <a
          href="https://external-site.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          External Site
        </a>
        {children}
      </main>
      <footer>© {new Date().getFullYear()} Safety Equipment Company</footer>
    </div>
  );
}
