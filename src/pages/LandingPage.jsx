import React from 'react';
import VideoPlayer from '../components/Landing/VideoPlayer';
import PurchaseButton from '../components/Landing/PurchaseButton';
import WelcomeMessage from '../components/Landing/WelcomeMessage';
import './LandingPage.css';

const LandingPage = () => {
  const videoId = 'jWFxlRpcjd0';
  const welcomeMessage = 'Bienvenidos a nuestra aplicación. Aquí puedes comprar y disfrutar de nuestro contenido.';

  return (
    <div className="landing-page text-center">
      <VideoPlayer 
        videoId={videoId}
        title="YouTube video player"
      />
      
      <PurchaseButton productId="default-product" />
      
      <WelcomeMessage message={welcomeMessage} />
      
      <PurchaseButton productId="default-product" />
    </div>
  );
};

export default LandingPage; 