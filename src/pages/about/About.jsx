import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";
import {BsEmojiSunglasses} from 'react-icons/bs';

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamıd */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About me <span>Bayramsch <BsEmojiSunglasses /> </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi there! I'am Bayram Kamaz</h2>
        <h4>
Ich bin Wirtschaftsingenieur mit 3 Jahren Erfahrung in verschiedenen IT-Bereichen. Ich versuche, mich ständig zu verbessern und mit neuen Technologien auf dem Laufenden zu bleiben, um kreative und innovative Lösungen hervorzubringen. Ich glaube voll und ganz an die Kraft von Teamarbeit und effektiver Kommunikation in Projektprozessen. Kundenzufriedenheit steht für mich an erster Stelle und mein Ziel ist es, benutzerfreundliche und effiziente Softwarelösungen anzubieten, indem ich mich auf die Bedürfnisse der Benutzer konzentriere.
        </h4>
        <h2>
          <a href="bayramkamaz@icloud.com">send email</a> :
          bayramkamaz@icloud.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;