import * as React from 'react';
import './style.css';
import CSVReader from 'react-csv-reader';
import { useState } from 'react';

export default function App() {
  const [csvData, setCsvData] = useState([]);

  const handleOnFileLoad = (data) => {
    setCsvData(data);
  };

  const handleOnError = (err, file) => {
    console.log(err, file);
  };

  const handleOnRemoveFile = () => {
    setCsvData([]);
  };
  console.log(csvData);
  return (
    <div className="App">
      <h1>CSV Parser Example</h1>
      <CSVReader
        onFileLoaded={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Click to upload CSV file.</span>
      </CSVReader>
      {csvData.length > 0 && (
        <div>
          <h2>Parsed CSV Data</h2>
          <table>
            <thead>
              <tr>
                {csvData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
