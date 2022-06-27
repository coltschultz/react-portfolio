import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([ 
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setWorkSelected={setWorkSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          {!workSelected ? (
            <>
            {resumeSelected ? (<Resume></Resume>) : (<About></About>)}
            </>
          ) : (
            <>
            <Gallery currentCategory={currentCategory}></Gallery>
            </>
          )}
          
            
            
          </>
        ) : (
            <ContactForm></ContactForm>
          )}

      </main>
      <footer>
        Visit Me On: <a href="https://www.github.com/coltschultz">Github</a> • <a href="https://www.linkedin.com/in/colt-schultz-5b8266238">LinkedIn</a> • <a href="https://www.instagram.com/coltlovestacos">Instagram</a>
      </footer>
    </div>
  );
}

export default App;
