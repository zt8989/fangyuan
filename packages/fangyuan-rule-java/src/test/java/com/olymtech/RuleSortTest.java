package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RuleSortTest extends AbstractRule<String> {
    RuleSortTest(Rule<String> rule) {
        super(rule);
    }

    public static void main(String[] args) {
        RuleSortTest instance = getInstance();
        boolean evaluate = instance.evaluate(null);
        String execute = instance.execute();

        System.out.println(evaluate);
        System.out.println(execute);
    }

    static RuleSortTest getInstance(){
        Map<String, Rule<String>> rules = new HashMap<>();

        rules.put("rule1", new SimpleRule<String>(
                "'add-' ~= '^add.*'",
                "'123'",
                String.class
        ));

        rules.put("rule2", new SimpleRule<String>(
                "2 > 2",
                "'123'",
                String.class
        ));

        return new RuleSortTest(new SortRule<>(rules));
    }
}
