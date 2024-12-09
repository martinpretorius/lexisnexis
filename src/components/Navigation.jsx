import { useState, useEffect } from 'react';
import menuData from '../menuData.json'; // Import the JSON data
import logo from '/assets/images/logo.svg';
import logoSimple from '/assets/images/logo-simple.svg';
import OffcanvasSidebarMenu from './OffcanvasSidebarMenu';

const Navigation = () => {
  // State for managing the sidebar (expanded or collapsed)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // true means expanded
  const [isTextVisible, setIsTextVisible] = useState(true); // For text visibility

  // Simulate fetching data from the imported JSON
  const menuItems = menuData;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // When the sidebar opens or closes, toggle the visibility of the text after the animation
  useEffect(() => {
    if (isSidebarOpen) {
      // Wait for the sidebar to expand before showing the text
      const timeout = setTimeout(() => {
        setIsTextVisible(true);
      }, 300); // Same duration as the sidebar expansion
      return () => clearTimeout(timeout); // Clean up the timeout on unmount
    } else {
      // Hide the text immediately when closing
      setIsTextVisible(false);
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div
        className={`sidebar position-relative top-0 left-0 
          ${isSidebarOpen ? 'open' : 'collapsed'}
        `}
      >
        {/* Toggle Button Inside the Sidebar */}
        <button
          className="position-absolute border-0 d-flex justify-content-end align-items-center sidebar-toggle"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <img
              src={'assets/icons/icon-chevron.svg'}
              className="chevron-left"
              alt="Arrow pointing left to collapse sidebar menu."
            />
          ) : (
            <img
              src={'assets/icons/icon-chevron.svg'}
              className="chevron-right"
              alt="Arrow pointing right to expand sidebar menu."
            />
          )}
        </button>

        <div className="logo_container position-relative">
          {isSidebarOpen && isTextVisible ? (
            <img src={logo} alt="LexisNexis logo." className="logo" />
          ) : (
            <img src={logoSimple} alt="LexisNexis logo." className="logo" />
          )}
        </div>

        <ul className="position-relative overflow-hidden m-0 p-0">
          {menuItems.map((item) => (
            <li className="rounded-3" key={item.id}>
              <a
                href={item.link}
                className="d-flex align-items-center gap-3 text-decoration-none menu-item"
              >
                <img src={item.icon} className="sidebar-icon" alt="icon" />
                {/* Only show the text when the sidebar is open and text is visible */}
                {isSidebarOpen && isTextVisible && (
                  <span className="sidebar-text">{item.name}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <OffcanvasSidebarMenu menuItems={menuItems} />
    </>
  );
};

export default Navigation;
