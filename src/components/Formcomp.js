import React from 'react';

function FormComponent({ tone, setTone, length, setLength, features, setFeatures, positioning, setPositioning, handleGenerate, handleInsert, isFormValid }) {
  return (
<form onSubmit={handleGenerate}>
  <div>
    <div>
      <div>
      <label for="Tone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select  id="tone"
  value={tone} 
  onChange={(e) => setTone(e.target.value)}
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4 ">
  <option value="Casual">Casual</option>
  <option value="Formal">Formal</option>
  <option value="Grandiose">Grandiose</option>
  </select>
      </div>
    </div>
    <div>
      <div>
  <label for="Length" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select   id="length"
  value={length}
  onChange={(e) => setLength(e.target.value)}
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4">
  <option value="Short less than 100 words">Short (4-6 sentences)</option>
          <option value="Medium around 200-400">Medium (8-10 sentences)</option>
          <option value="Long around 600-700 words">Long (15-20 sentences)</option>
  </select>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div>
      <label for="Features" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Features</label>
        <textarea
          id="features"
          rows="3"
          value={features}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2" placeholder="Features"
          onChange={(e) => setFeatures(e.target.value)}
          required
        ></textarea>
      </div>
    </div>
    <div>
      <div>
        <label for="positioning">
          <span>Brand Positioning</span>
          <textarea
            id="positioning"
            rows="3"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2" placeholder="Brand Positioning"
            value={positioning}
            onChange={(e) => setPositioning(e.target.value)}
            required
          ></textarea>
        </label>
      </div>
    </div>
  </div>
  <div class="flex flex-no-wrap">
    <div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" disabled={!isFormValid()}>
        Generate
      </button>
    </div>
    <div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" onClick={handleInsert} disabled={!isFormValid()}>
        Insert in DB
      </button>
    </div>
  </div>
</form>
  );
}


export default FormComponent;
