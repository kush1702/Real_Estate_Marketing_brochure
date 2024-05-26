import React from 'react';

function GeneratedCopyComponent({ response, handleTextSelect }) {
  return (
    <div className="mt-4">
      <h2>Generated Copy:</h2>
      <textarea class="box-border h-32 w-32 p-4 border-4 m-4 ..." rows="6" value={response} onMouseUp={handleTextSelect} readOnly style={{ width: '100%', height: '200px' }} />
    </div>
  );
}

export default GeneratedCopyComponent;
