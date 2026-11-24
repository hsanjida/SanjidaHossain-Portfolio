import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.title}, {profile.location}.</p>
        <p className="flex items-center gap-5">
          <a className="hover:text-brand" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="hover:text-brand" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="hover:text-brand" href="#top">Back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}
