import styled, { createGlobalStyle } from 'styled-components';
import GeomanistRegWoff from '../../fonts/geomanist-regular-webfont.woff';
import GeomanistRegWoff2 from '../../fonts/geomanist-regular-webfont.woff2';
import GeomanistRegTtf from '../../fonts/geomanist-regular-webfont.ttf';
import GeomanistMedWoff from '../../fonts/geomanist-medium-webfont.woff';
import GeomanistMedWoff2 from '../../fonts/geomanist-medium-webfont.woff2';
import GeomanistMedTtf from '../../fonts/geomanist-medium-webfont.ttf';

const GlobalStyleVariables = createGlobalStyle`
  @font-face {
    font-family:'Geomanist-Reg';
    src: url('${GeomanistRegWoff2}') format('woff2'),
         url('${GeomanistRegWoff}') format('woff'),
         url('${GeomanistRegTtf}') format('ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family:'Geomanist-Med';
    src: url('${GeomanistMedWoff2}') format('woff2'),
         url('${GeomanistMedWoff}') format('woff'),
         url('${GeomanistMedTtf}') format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  body{
    font-family:'Geomanist-Reg' , Helvetica, Arial;
  }
  p{
    
    font-weight:600;
  }
`;

const BaseStyle = () => <GlobalStyleVariables />;

export default BaseStyle;
