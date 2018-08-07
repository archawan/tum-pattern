// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Mixins
// * Sample mixins
//   - Sample Mixins A
//   - Sample Mixins B
//   - Sample Mixins C
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Sample mixins
// ==================================================================================================

// export const redirect = (path) => {
//   store.getState().thisRoute.push(path)
// }


// Sample Mixins A
// -------------------------------
export const sampleMixinsA = (boxShadow) => {
  return `
    box-shadow: ${boxShadow};
  `
}

// Sample Mixins B
// -------------------------------
export const sampleMixinsB = (padding, bgColor) => {
  return `
    padding: ${padding};
    background-color: ${bgColor};
  `
}

// Sample Mixins C
// -------------------------------
export const sampleMixinsC = (border) => {
  return `
    border: ${border}
  `
}
