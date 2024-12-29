import Link from "next/link";

export default function index() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the Taekwondo School App</h1>
        <p>A communication hub for parents, students, and instructors.</p>
      </header>
      <main style={styles.main}>
        <div style={styles.card}>
          <h2>Login</h2>
          <p>Already have an account? Access your dashboard here.</p>
          <Link href="/login">
            <button style={styles.button}>Login</button>
          </Link>
        </div>
        <div style={styles.card}>
          <h2>Sign Up</h2>
          <p>New here? Create an account to get started!</p>
          <Link href="/signup">
            <button style={styles.button}>Sign Up</button>
          </Link>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Taekwondo School App. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Basic inline styles (can be replaced with TailwindCSS or custom CSS)
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center" as const,
    margin: "0 auto",
    padding: "2rem",
    maxWidth: "800px",
  },
  header: {
    marginBottom: "2rem",
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "45%",
    textAlign: "left" as const,
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  footer: {
    marginTop: "2rem",
    color: "#555",
  },
};
