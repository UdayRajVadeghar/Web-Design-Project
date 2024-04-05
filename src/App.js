import React from 'react';
import FirstComponent from './components/FirstComponent';
import Footer from './components/Footer';
import FooterExtras from './components/FooterExtras';
import FourthComponent from './components/FourthComponent';
import NavigationBar from './components/NavigationBar';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';


const App = () => {
  return (
    <div>
      <NavigationBar />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Footer />
      <FooterExtras />
    </div>
  );
}

export default App;
