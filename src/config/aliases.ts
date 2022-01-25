/* const aliases = (prefix = `src`) => ({
  "@atoms": `${prefix}/components/atoms`,
  "@molecules": `${prefix}/components/molecules`,
  "@organisms": `${prefix}/components/organisms`,
  "@templates": `${prefix}/components/templates`,
  "@components": `${prefix}/components`,
  "@config": `${prefix}/config`,
  "@enums": `${prefix}/enums`,
  "@hooks": `${prefix}/hooks`,
  "@icons": `${prefix}/components/atoms/Icons`,
  "@styles": `${prefix}/styles`,
  "@utils": `${prefix}/utils`,
  "@state": `${prefix}/state`,
  "@types": `${prefix}/types`,
  "@storybookHelpers": `../.storybook/helpers`,
}); */

const aliases = (prefix = `src`) => ({
  "@public": `${prefix}/public`,
  "@components": `${prefix}/component`,
});

export default aliases;
