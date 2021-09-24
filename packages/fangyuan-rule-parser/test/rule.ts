/*
 * 此文件由规则文件自动生成请勿编辑
 */

const isDev = process.env.NODE_ENV !== 'production';
// eslint-disable-next-line
const debug = console.debug;
// prettier-ignore
import User from '@/knownledage/User'
import FeeItem from '@/knownledage/FeeItem';
type Context = { user: User; feeItem: FeeItem };

type Rule = (ctx: Context) => {
  evaluate: () => boolean;
  execute: () => [number, string];
};
function inArrayOrObject(key: string, data: string[] | Object) {
  return Array.isArray(data) ? data.includes(key) : key in data;
}
function match(matchString: string, regex: string) {
  return new RegExp(regex).test(matchString);
}
function concurrent(rules: Record<string, Rule>) {
  return (ctx: Context) => {
    let validRules: [string, ReturnType<Rule>][] | undefined;

    function evaluate() {
      validRules = Object.keys(rules)
        .map((key) => [key, rules[key](ctx)] as [string, ReturnType<Rule>])
        .filter(([key, obj]) => {
          const result = obj.evaluate();
          // isDev && debug(key + ":", result)
          return result;
        });
      return validRules.length > 0;
    }

    function execute() {
      if (!validRules) {
        throw new Error('please confirm evaluate is true');
      }
      const result = validRules.map(([, obj]) => obj.execute());
      // isDev && debug("result:", result)
      return result;
    }

    return { evaluate, execute };
  };
}
function sort(rules: Record<string, Rule>): Rule {
  return (ctx: Context) => {
    let obj: ReturnType<Rule> | undefined;
    function evaluate() {
      for (let key of Object.keys(rules)) {
        obj = rules[key](ctx);
        if (obj.evaluate()) {
          // isDev && debug(key + ":", true)
          return true;
        }
        // isDev && debug(key + ":", false)
      }
      obj = undefined;
      return false;
    }
    function execute() {
      if (!obj) {
        throw new Error('please confirm evaluate is true');
      }
      const result = obj.execute();
      // isDev && debug("result:", result)
      return result;
    }

    return { evaluate, execute };
  };
}

const rules$0: Record<string, Rule> = (exports.rules$0 = {});
rules$0['华南地区'] = function (ctx: Context) {
  const { user, feeItem } = ctx;
  function evaluate() {
    return (
      user.orgName == '华南公司' &&
      user.roleName == '航管' &&
      inArrayOrObject(feeItem.orgId, ['1223', '123'])
    );
  }
  function execute() {
    return [0, ''];
  }

  return { evaluate, execute };
};
const rules$1: Record<string, Rule> = (exports.rules$1 = {});
rules$0['非业务主体'] = sort(rules$1);
rules$1['非业务主体锁定'] = function (ctx: Context) {
  const { user, feeItem } = ctx;
  let $orgIds = user.orgIds;
  function evaluate() {
    return (
      user.orgIds &&
      !match(feeItem.id, '^add-') &&
      !inArrayOrObject(feeItem.orgId, $userList)
    );
  }
  function execute() {
    return [1, $orgIds];
  }

  return { evaluate, execute };
};

rules$0['子单锁定'] = function (ctx: Context) {
  const { feeItem } = ctx;
  function evaluate() {
    return feeItem.splitBillType == 'child';
  }
  function execute() {
    return [1, '字段锁定'];
  }

  return { evaluate, execute };
};

module.exports = concurrent(rules$0);
