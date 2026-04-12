export default function Footer() {
  return (
    <footer>
      <div className="container-lg">
        <h2>Victor</h2>
        <p className="mono tagline">
          LOCAL-FIRST COMPANION INTELLIGENCE FOR CRITICAL TEAMS
        </p>
        <div className="links">
          <a href="#environments">Environments</a>
          <a href="#definition">Definition</a>
          <a href="#architecture">Architecture</a>
          <a href="#contact">Contact path</a>
        </div>
        <div className="copy">
          &copy; {new Date().getFullYear()} Victor Intelligence. Designed to
          tell a sharper, more credible story.
        </div>
      </div>
    </footer>
  );
}
