import React, { useState, useEffect } from 'react';
import menuData from '../menuData.json'; // Import the JSON data
import logo from '/assets/images/logo.svg';
import logoSimple from '/assets/images/logo-simple.svg';

const Navigation = () => {
  // State for managing the sidebar (expanded or collapsed)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // true means expanded
  const [isTextVisible, setIsTextVisible] = useState(true); // For text visibility

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Simulate fetching data from the imported JSON (no need to use `fetch` here)
  const menuItems = menuData; // Use the imported menu data directly

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // When the sidebar opens or closes, we toggle the visibility of the text after the animation
  useEffect(() => {
    if (isSidebarOpen) {
      // Wait for the sidebar to expand before showing the text
      const timeout = setTimeout(() => {
        setIsTextVisible(true);
      }, 200); // Same duration as the sidebar expansion
      return () => clearTimeout(timeout); // Clean up the timeout on unmount
    } else {
      // Hide the text immediately when closing
      setIsTextVisible(false);
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        {/* Toggle Button Inside the Sidebar */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <i className="bi bi-chevron-left"></i>
          ) : (
            <i className="bi bi-chevron-right"></i>
          )}
        </button>

        <div className="logo_container">
          {isSidebarOpen && isTextVisible ? (
            <img src={logo} alt="LexisNexis logo." className="logo" />
          ) : (
            <img src={logoSimple} alt="LexisNexis logo." className="logo" />
          )}
        </div>

        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="menu-item">
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

      <div className="app">
        {/* Hamburger Icon */}
        <button
          className="hamburger-btn"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Sidebar */}
        <div className={`sidebar-mobile ${isMobileSidebarOpen ? 'open' : ''}`}>
          <img src={logo} alt="LexisNexis logo." className="mobile-logo" />

          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
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

export default Navigation;
