import React, { useEffect } from 'react';

const BotpressChat: React.FC = () => {
  useEffect(() => {
    const initializeChat = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: 'e887d00b-a84b-4afc-a1f8-f43aadb33adf',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
        });
      } else {
        console.error('botpressWebChat is not defined');
      }
    };

    // Espera a que los scripts se carguen completamente
    const checkScriptsLoaded = () => {
      if (window.botpressWebChat) {
        initializeChat();
      } else {
        setTimeout(checkScriptsLoaded, 100); // Reintentar cada 100ms
      }
    };

    checkScriptsLoaded();
  }, []);

  return <div id="botpress-webchat"></div>;
};

export default BotpressChat;
