export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="#" className="brand-logo">
        Search from here
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Movie Application</a>
          </li>
          <li>
            <a href="https://t.me/SardiDev">Programmer</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
