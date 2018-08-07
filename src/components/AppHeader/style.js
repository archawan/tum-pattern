import styled from 'styled-components'
import { colors } from '../../themes/styles/bases/variables'
// import { sampleMixinsA } from '../../themes/styles/helpers/mixins' // In future, mixins is imported from npm(not from project)
// import { sampleUtility } from '../../themes/styles/helpers/utilities' // In future, utilities is imported from npm(not from project)
import { textHeadingPrimaryXs } from '../../themes/styles/bases/typographys'

// Modifier (props)
// ============================================================

// Core
// ============================================================
export const AppHeaderStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${colors.black};

  /* Child element styles
  ------------------------------- */
  .logo {
    width: auto;
    height: 80px;
  }

  .title {
    ${textHeadingPrimaryXs};
    display: inline-block;
    color: ${colors.white};
  }

  .segment {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* States
  ------------------------------- */

  /* Modifiers
  ------------------------------- */

  /* States with modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`
