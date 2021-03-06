import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    setWorkSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          COLT
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#" onClick={() => { setContactSelected(false); setWorkSelected(false); setResumeSelected(false);}}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => { setContactSelected(true); setWorkSelected(false); setResumeSelected(false);}}>Contact</span>
          </li>
          <li className="mx-2">
            <a data-testid="work" href="#" onClick={() => { setContactSelected(false); setWorkSelected(true); setResumeSelected(false);}}>
              My Work
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#" onClick={() => { setContactSelected(false); setWorkSelected(false); setResumeSelected(true);}}>
              My Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
