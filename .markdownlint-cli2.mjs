export default {
  config: {
    default: true,
    MD003: { style: "atx" },
    MD004: { style: "dash" },
    MD013: false,
    MD024: { allow_different_nesting: true },
    MD033: false,
    MD036: false,
    MD040: false,
    MD045: false,
    MD046: false,
  },
  ignores: ["**/node_modules/**", "**/*.snippet.md"],
};
