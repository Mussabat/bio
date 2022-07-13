import './App.css';
import BioData from './BioData';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import SocialInfo from './components/SocialInfo';

function App() {
  return (
    <div className="App"> 
    <BioData
      socialInfo = {
        <SocialInfo
        linkedin = 'linhdhd'
        fb = 'kjsdhhb'
        />
      }

      personalInfo = {
        <PersonalInfo 
        name = "Nafisa"
        mobile = "0000"
        email = 'jdh@vsh.com'
        />
      }

      skillSection = {
        <Skills 
        skills = {['js', 'html', 'c']}

        />
      }
      />
      </div>          

  );
}

export default App;
 