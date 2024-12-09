const Dashboard_NewWidget = ({ user }) => {
  return (
    <div className="db_newWidget rounded-3">
      <div className="newWidget_main">
        <div className="newWidget_text_container">
          <h1 className="newWidget_header">{`Welcome back ${user.name}!`}</h1>
          <p className="newWidget_text">See what's happening at LexisNexis</p>
          <button className="btn-newWidget">
            Create New Widget{' '}
            <img src="assets/icons/icon-plus.svg" alt="Plus symbol." />
          </button>
        </div>
      </div>
      <div className="newWidget_widgetTotals">
        <div className="totals-container">
          <div className="totals">
            <div className="totals-title">launched container</div>
            <div className="totals-text">567</div>
          </div>
          <div className="totals">
            <div className="totals-title">draft widget</div>
            <div className="totals-text">12</div>
          </div>
          <div className="totals">
            <div className="totals-title">scheduled widget</div>
            <div className="totals-text">06</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_NewWidget;
