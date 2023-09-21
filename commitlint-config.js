// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "never", ["upper-case", "pascal-case", "start-case"]],
  },
};
