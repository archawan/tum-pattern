import styled from 'styled-components'
import { colors } from '../../themes/styles/bases/variables'
// import { sampleMixinsA } from '../../themes/styles/helpers/mixins' // In future, mixins is imported from npm(not from project)
// import { sampleUtility } from '../../themes/styles/helpers/utilities' // In future, utilities is imported from npm(not from project)
import { textBodyPrimaryXs } from '../../themes/styles/bases/typographys'

// Modifier (props)
// ============================================================

// Core
// ============================================================
export const AppIntroStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 20px;
  margin-bottom: 30px;
  background-color: ${colors.gray4};

  /* Child element styles
  ------------------------------- */
  .text-introduction,
  .text-result {
    ${textBodyPrimaryXs}
    margin-bottom: 5px;
  }

  .segment {
    margin-bottom: 15px;
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
