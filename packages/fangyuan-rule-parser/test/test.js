const rule = require("./feeLock");

console.log(
  rule.execute({
    user: {
      orgIds: ["1, 2, 3"],
    },
    feeItem: {
      orgId: "1",
    },
  })
);
