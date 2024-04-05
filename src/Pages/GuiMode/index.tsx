import React from 'react';

const InsultPage: React.FC = () => {
  // Define the number of times to repeat the text
  const repeatCount = 500;

  return (
    <div >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: repeatCount }).map((_, index) => (
          <div key={index} style={{ margin: '2px' }}>
            <h1>VAI SE FUDER GUILHERME</h1>
            <p>This is insult number {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsultPage;
