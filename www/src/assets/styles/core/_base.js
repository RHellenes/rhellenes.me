import styled, { createGlobalStyle } from 'styled-components';

import hkgroteskBoldEot from '../../fonts/hkgrotesk-bold.eot';
import hkgroteskBoldWoff2 from '../../fonts/hkgrotesk-bold.woff2';
import hkgroteskBoldWoff from '../../fonts/hkgrotesk-bold.woff';

import hkgroteskBolditalicEot from '../../fonts/hkgrotesk-bolditalic.eot';
import hkgroteskBolditalicWoff2 from '../../fonts/hkgrotesk-bolditalic.woff2';
import hkgroteskBolditalicWoff from '../../fonts/hkgrotesk-bolditalic.woff';
import hkgroteskItalicEot from '../../fonts/hkgrotesk-italic.eot';

import hkgroteskItalicWoff2 from '../../fonts/hkgrotesk-italic.woff2';
import hkgroteskItalicWoff from '../../fonts/hkgrotesk-italic.woff';
import hkgroteskLightEot from '../../fonts/hkgrotesk-light.eot';

import hkgroteskLightWoff2 from '../../fonts/hkgrotesk-light.woff2';
import hkgroteskLightWoff from '../../fonts/hkgrotesk-light.woff';
import hkgroteskLightitalicEot from '../../fonts/hkgrotesk-lightitalic.eot';

import hkgroteskLightitalicWoff2 from '../../fonts/hkgrotesk-lightitalic.woff2';
import hkgroteskLightitalicWoff from '../../fonts/hkgrotesk-lightitalic.woff';
import hkgroteskMediumEot from '../../fonts/hkgrotesk-medium.eot';

import hkgroteskMediumWoff2 from '../../fonts/hkgrotesk-medium.woff2';
import hkgroteskMediumWoff from '../../fonts/hkgrotesk-medium.woff';
import hkgroteskMediumitalicEot from '../../fonts/hkgrotesk-mediumitalic.eot';

import hkgroteskMediumitalicWoff2 from '../../fonts/hkgrotesk-mediumitalic.woff2';
import hkgroteskMediumitalicWoff from '../../fonts/hkgrotesk-mediumitalic.woff';
import hkgroteskRegularEot from '../../fonts/hkgrotesk-regular.eot';

import hkgroteskRegularWoff2 from '../../fonts/hkgrotesk-regular.woff2';
import hkgroteskRegularWoff from '../../fonts/hkgrotesk-regular.woff';
import hkgroteskSemiboldEot from '../../fonts/hkgrotesk-semibold.eot';

import hkgroteskSemiboldWoff2 from '../../fonts/hkgrotesk-semibold.woff2';
import hkgroteskSemiboldWoff from '../../fonts/hkgrotesk-semibold.woff';
import hkgroteskSemibolditalicEot from '../../fonts/hkgrotesk-semibolditalic.eot';

import hkgroteskSemibolditalicWoff2 from '../../fonts/hkgrotesk-semibolditalic.woff2';
import hkgroteskSemibolditalicWoff from '../../fonts/hkgrotesk-semibolditalic.woff';

const GlobalStyleVariables = createGlobalStyle`

@font-face {
    font-family: 'hk_groteskbold';
    src: url('${hkgroteskBoldEot}');
    src: url('${hkgroteskBoldEot}') format('embedded-opentype'),
         url('${hkgroteskBoldWoff2}') format('woff2'),
         url('${hkgroteskBoldWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_groteskbold_italic';
    src: url('${hkgroteskBolditalicEot}');
    src: url('${hkgroteskBolditalicEot}') format('embedded-opentype'),
         url('${hkgroteskBolditalicWoff2}') format('woff2'),
         url('${hkgroteskBolditalicWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'hk_groteskitalic';
    src: url('${hkgroteskItalicEot}');
    src: url('${hkgroteskItalicEot}') format('embedded-opentype'),
         url('${hkgroteskItalicWoff2}') format('woff2'),
         url('${hkgroteskItalicWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'hk_grotesklight';
    src: url('${hkgroteskLightEot}');
    src: url('${hkgroteskLightEot}') format('embedded-opentype'),
         url('${hkgroteskLightWoff2}') format('woff2'),
         url('${hkgroteskLightWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_grotesklight_italic';
    src: url('${hkgroteskLightitalicEot}');
    src: url('${hkgroteskLightitalicEot}') format('embedded-opentype'),
         url('${hkgroteskLightitalicWoff2}') format('woff2'),
         url('${hkgroteskLightitalicWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_groteskmedium';
    src: url('${hkgroteskMediumEot}');
    src: url('${hkgroteskMediumEot}') format('embedded-opentype'),
         url('${hkgroteskMediumWoff2}') format('woff2'),
         url('${hkgroteskMediumWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_groteskmedium_italic';
    src: url('${hkgroteskMediumitalicEot}');
    src: url('${hkgroteskMediumitalicEot}') format('embedded-opentype'),
         url('${hkgroteskMediumitalicWoff2}') format('woff2'),
         url('${hkgroteskMediumitalicWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_groteskregular';
    src: url('${hkgroteskRegularEot}');
    src: url('${hkgroteskRegularEot}?#iefix') format('embedded-opentype'),
         url('${hkgroteskRegularWoff2}') format('woff2'),
         url('${hkgroteskRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_grotesksemibold';
    src: url('${hkgroteskSemiboldEot}');
    src: url('${hkgroteskSemiboldEot}?#iefix') format('embedded-opentype'),
         url('${hkgroteskSemiboldWoff2}') format('woff2'),
         url('${hkgroteskSemiboldWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'hk_grotesksemibold_italic';
    src: url('${hkgroteskSemibolditalicEot}');
    src: url('${hkgroteskSemibolditalicEot}') format('embedded-opentype'),
         url('${hkgroteskSemibolditalicWoff2}') format('woff2'),
         url('${hkgroteskSemibolditalicWoff}') format('woff');
    font-weight: normal;
    font-style: normal;

}

  body{
    font-family:'hk_groteskregular' , Helvetica, Arial;
  }
  strong{
    font-family:'hk_grotesksemibold' , Helvetica, Arial;

  }
  p{
  }
`;

const BaseStyle = () => <GlobalStyleVariables />;

export default BaseStyle;
