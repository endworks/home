import Link from "next/link";

import "./globals.sass";
import styles from "./home.module.sass";

export const metadata = {
  title: "end.works",
  description: "creations from the end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.app}>
          <header className={styles["app-header"]}>
            <div className={styles.header}>
              <Link href="/">
                <h1 className={styles["header-title"]}>
                  end.<span className={styles["header-light"]}>works</span>
                </h1>
              </Link>
              <p className={styles.subtitle}>
                by{" "}
                <Link
                  href="//github.com/ender-null"
                  className={styles.contrast}
                >
                  @ender-null
                </Link>
              </p>
            </div>
            <nav className={styles.menu}>
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
