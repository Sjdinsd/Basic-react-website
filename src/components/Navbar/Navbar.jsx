import css from "./Navbar.module.css";
function Navbar() {
  return (
    <h1 className={css.navBody}>
      <a id={css.home} href="/">
        Sjdinsd
      </a>
      <div id={css.items}>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/services">Services</a>
        <a href="https://github.com/Sjdinsd" target="_blank"></a>
      </div>
    </h1>
  );
}

export default Navbar;
