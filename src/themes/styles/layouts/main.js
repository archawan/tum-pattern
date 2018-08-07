import { injectGlobal } from 'styled-components'
import {
  colors,
  boxShadows,
  screens,
} from '../bases/variables'
import { textBodyPrimaryXs } from '../bases/typographys'
import {
  sampleMixinsA,
  sampleMixinsB,
  sampleMixinsC,
} from '../helpers/mixins'
import { sampleUtility } from '../helpers/utilities'


// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Global style
// * Test html tag selector
// * Test css selector class
// * Sample structure class
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  /* Test html tag selector
  ============================================================ */
  body {
    padding: 30px;

    /* Test no effect global to local style */
    .segment {
      margin-bottom: 60px;
    }
  }

  /* Test no effect global to local style
  ============================================================ */
  .segment {
    margin-bottom: 60px;
  }


  /* Test css selector class
  ============================================================ */
  .test-globalstyle-variables-mixins-utilities-typographys {
    /* Sample mixins */
    ${sampleMixinsA(boxShadows.shadow1)};
    ${sampleMixinsB('15px', colors.gray4)};
    ${sampleMixinsC('5px solid ' + colors.gray1)};

    /* Sample utility */
    ${sampleUtility}

    /* Sample typography */
    ${textBodyPrimaryXs}

    /* Sample variable */
    color: ${colors.red};

    /* Sample css property */
    margin-bottom: 30px;
  }

  /* Sample structure class
  ============================================================ */
  .sample-structure-class {
    /* Parent styles
    ------------------------------- */
    ${sampleMixinsA(boxShadows.shadow1)};
    padding: 50px;
    margin-bottom: 30px;
    border: 5px solid ${colors.black};

    /* Child element styles
    ------------------------------- */
    .child-element {
      background-color: ${colors.gray4};
    }

    /* States
    ------------------------------- */
    &.is-success {
      .child-element {
        background-color: ${colors.green1};
      }
    }

    &.is-error {
      .child-element {
        background-color: ${colors.red};
      }
    }

    /* Modifiers
    ------------------------------- */
    &.is-modifier-first {
      height: 50vh;
    }

    /* States with modifiers
    ------------------------------- */
    &.is-success {
      &.is-modifier-first {
        .child-element {
          background-color: ${colors.black};
        }
      }
    }

    /* Media queries
    ------------------------------- */
    @media (max-width: ${screens.tabletLg}) {
      background-color: ${colors.black};
    }
  }
`;
