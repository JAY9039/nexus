import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://external-site.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Site
      </a>
      <p>© {new Date().getFullYear()} Safety Equipment Company</p>
    </footer>
  );
}
