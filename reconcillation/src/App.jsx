import React, { useState } from 'react';

function App() {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className='h-screen'>
      <form className='flex flex-col gap-4 w-full h-full justify-center items-center '>
        <div>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input
          type='checkbox'
          id='student'
          name='student'
          value={isStudent}
          onChange={() => setIsStudent(!isStudent)}
        />
        <label htmlFor='student'>Are you a student?</label>

        </div>
        {isStudent ? (
          <input type="text" placeholder="Enter your school name" />
        ) : (
          <input type="text" placeholder="Enter your company name" />
        )}
      </form>
    </div>
  );
}

export default App;