import React, { useEffect } from 'react';

function RegenerateDropdownComponent({ showDropdown, handleRegenerate ,setShowDropdown}) {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const selection = window.getSelection();
      if (!selection.toString()) {
        handleDropdownClose();
      }
    };

    document.body.addEventListener('mouseup', handleDocumentClick);

    return () => {
      document.body.removeEventListener('mouseup', handleDocumentClick);
    };
  });

  const handleDropdownClose = () => {
    // Close the dropdown
    setShowDropdown(false);
  };

  const handleOptionClick = (option) => {
    handleRegenerate(option);
    handleDropdownClose();
  };

  return (
    <>
      {showDropdown && (
        <div className="regenerate-dropdown">
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" onClick={() => handleOptionClick("longer")}>Elaborate</button>
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" onClick={() => handleOptionClick("shorter")}>Explain in Few Words</button>
        </div>
      )}
    </>
  );
}

export default RegenerateDropdownComponent;