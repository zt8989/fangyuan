/*
* 此文件由规则文件自动生成请勿编辑
*/
package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.olymtech.ConcurrentRule;


public class RuleTest extends AbstractRule<List<String>> {

    RuleTest(Rule<List<String>> rule) {
        super(rule);
    }

    static RuleTest getInstance(){
        Map<String, Rule<String>> rules$0 = new HashMap<>();

        rules$0.put("华南地区", new SimpleRule<>(
                "(user.orgName  == \"华南公司\" && user.roleName  == \"航管\") && (inArrayOrObject(feeItem.orgId , [\"1223\",\"123\"]))",
                "org.javatuples.Pair.with(0, \"\")",
                String.class
        ));

        Map<String, Rule<String>> rules$1 = new HashMap<>();
        rules$0.put("非业务主体", new SortRule<>(rules$1));

        rules$1.put("非业务主体锁定", new SimpleRule<>(
                "$orgIds = user.orgIds;(user.orgIds ) && (( !match(feeItem.id , \"^add-\") ) && ( !inArrayOrObject(feeItem.orgId , $userList) ))",
                "$orgIds = user.orgIds;org.javatuples.Pair.with(1, $orgIds)",
                String.class
        ));

        rules$0.put("子单锁定", new SimpleRule<>(
                "(feeItem.splitBillType  == \"child\")",
                "org.javatuples.Pair.with(1, \"子单锁定\")",
                String.class
        ));


        return new RuleTest(new ConcurrentRule<>(rules$0));
    }
}
