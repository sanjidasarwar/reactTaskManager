function Header({theme, handleThemeChange}) {
const themes = ['light', 'medium', 'dark', 'gOne', 'gTwo', 'gThree'];

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-warning px-2 rounded shadow">
        <a className="navbar-brand text-white" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="themeSelector ms-auto">
            {
                themes.map(themeName =>(
                    <span 
                        key={themeName}
                        className={`${themeName} ${theme === themeName ? 'active' : ''}` }
                        onClick={()=>handleThemeChange(themeName)}>
                    </span>
                ))
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
