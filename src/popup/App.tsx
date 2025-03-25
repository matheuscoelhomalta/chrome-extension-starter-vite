import React from "react";

const App: React.FC = () => {
  const openSettings = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <div className="p-4 w-72">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Chrome Extension Template</h1>
        <button
          onClick={openSettings}
          className="text-blue-500 hover:text-blue-700"
          title="Open Settings"
        >
          ⚙️
        </button>
      </div>
      <p className="text-sm text-gray-700 mt-2">
        This is a template for a Chrome extension using React and Vite. Click
        the gear icon to access settings.
      </p>
    </div>
  );
};

export default App;
