package com.olymtech;

import java.util.HashMap;
import java.util.Map;

public class Test {
    public static class FeeItem {
        private String splitBillType;

        public FeeItem(String splitBillType) {
            this.splitBillType = splitBillType;
        }

        public String getSplitBillType() {
            return splitBillType;
        }

        public void setSplitBillType(String splitBillType) {
            this.splitBillType = splitBillType;
        }
    }
    public static void main(String[] args) {
        RuleTest instance = RuleTest.getInstance();
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
//        map2.put("splitBillType", "child");
        map.put("feeItem", new FeeItem("child"));
        System.out.println(instance.evaluate(map));
        System.out.println(instance.execute());
    }
}
