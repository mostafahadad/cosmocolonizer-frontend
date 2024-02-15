import TerraNovaImage from './images/terra_nova.jpg';
import LunaMagnaImage from './images/luna_magna.jpg';
import SolaraImage from './images/solara.jpg';


export default function getPlanetImage(planetName) {
    switch (planetName) {
      case 'Terra Nova':
        return TerraNovaImage;
      case 'Luna Magna':
        return LunaMagnaImage;
      case 'Solara':
        return SolaraImage;
      default:
        return ''; // Provide a default image or leave as an empty string
    }
  }