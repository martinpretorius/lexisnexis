import logo from '/assets/images/logo.svg';

const OffcanvasSidebarMenu = ({ menuItems }) => {
  return (
    <>
      <button
        className="hamburger-btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        aria-label="Toggle mobile sidebar menu."
      >
        <img src="assets/icons/mobile-menu.svg" alt="Mobile menu." />
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        id="offcanvasSidebar"
        aria-label="Mobile sidebar menu."
        tabIndex="-1"
      >
        <div className="offcanvas-body sidebar-mobile open">
          <img src={logo} alt="LexisNexis logo." className="mobile-logo" />

          <ul>
            {menuItems.map((item) => (
              <li key={item.id} data-bs-dismiss="offcanvas">
                <a href={item.link} className="mobile-menu-item">
                  <img
                    src={item.icon}
                    className="mobile-sidebar-icon"
                    alt="icon"
                  />
                  <span className="mobile-sidebar-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffcanvasSidebarMenu;
