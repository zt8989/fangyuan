function inArrayOrObject(key, data) {
  return Array.isArray(data) ? data.includes(key) : key in data;
}
function concurrent(rules) {
  return (ctx) =>
    Object.keys(rules)
      .map((key) => rules[key](ctx))
      .filter((obj) => obj.evalute())
      .map((obj) => obj.evalute());
}
function sort(rules) {
  return (ctx) => {
    for (let key of Object.keys(rules)) {
      let obj = rules[key](ctx);
      if (obj.evalute()) {
        return obj.evalute();
      }
    }
  };
}

var rules$0 = {};
rules$0["华南地区"] = function (ctx) {
  const { user, feeItem } = ctx;
  function evalute() {
    return (
      user.orgName == "华南公司" &&
      user.roleName == "航管" &&
      inArrayOrObject(feeItem.orgId, ["1223", "123"])
    );
  }
  function execute() {
    return [0, ""];
  }

  return { evalute, execute };
};
var rules$1 = {};
rules$0["非业务主体"] = sort(rules$1);
rules$1["非业务主体锁定"] = function (ctx) {
  const { user, feeItem } = ctx;
  function evalute() {
    let $orgIds = user.orgIds;
    return user.orgIds && !inArrayOrObject(feeItem.orgId, $orgIds);
  }
  function execute() {
    return [1, "不同业务主体锁定"];
  }

  return { evalute, execute };
};

rules$0["子单锁定"] = function (ctx) {
  const { feeItem } = ctx;
  function evalute() {
    return feeItem.splitBillType == "child";
  }
  function execute() {
    return [1, "字段锁定"];
  }

  return { evalute, execute };
};

exports.execute = concurrent(rules$0);
