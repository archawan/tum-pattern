import styled from 'styled-components'
import {
  colors,
  boxShadows,
} from '../../themes/styles/bases/variables'
import { sampleMixinsA } from '../../themes/styles/helpers/mixins' // In future, mixins is imported from npm(not from project)
import { sampleUtility } from '../../themes/styles/helpers/utilities' // In future, utilities is imported from npm(not from project)
import { textBodyPrimaryXs } from '../../themes/styles/bases/typographys'

// Modifier (props)
// ============================================================

// Core
// ============================================================
export const FormLoginStyle = styled.form`
  /* Parent styles
  ------------------------------- */
  ${sampleMixinsA(boxShadows.shadow1)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  background-color: ${colors.gray4};

  /* Child element styles
  ------------------------------- */
  .label {
    ${textBodyPrimaryXs};
    ${sampleUtility};
    display: block;
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

// Secondary Core
// - Sample styled-components extend style
// - Sample minor component in main component
// ============================================================
export const FormLoginSecondaryStyle = FormLoginStyle.extend`
  /* Parent styles
  ------------------------------- */
  height: auto;
  background-color: ${colors.gray3};

  /* Child element styles
  ------------------------------- */
  .label,
  .segment {
    margin-bottom: 0;
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
