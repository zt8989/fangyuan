package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RuleTest implements Rule<List<String>> {
    private Rule<List<String>> rule;

    RuleTest(Rule<List<String>> rule) {
        this.rule = rule;
    }

    public static void main(String[] args) {
        RuleTest instance = getInstance();
        boolean evaluate = instance.evaluate(null);
        List<String> execute = instance.execute();

        System.out.println(evaluate);
        System.out.println(execute);
    }

    static RuleTest getInstance(){
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

        return new RuleTest(new ConcurrentRule(rules));
    }

    @Override
    public boolean evaluate(HashMap<String, Object> ctx) {
        return rule.evaluate(ctx);
    }

    @Override
    public List<String> execute() {
        return rule.execute();
    }
}
