package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RuleSortTest extends AbstractRule<String> {
    RuleSortTest(Rule<String> rule) {
        super(rule);
    }

    public static void main(String[] args) {
        RuleSortTest instance = getInstance();
        boolean evaluate = instance.evaluate(null);
        String execute = instance.execute();

        Matcher matcher = Pattern.compile("^add").matcher("add-123");
        System.out.println(matcher.find());
        System.out.println(evaluate);
        System.out.println(execute);
    }

    static RuleSortTest getInstance(){
        Map<String, Rule<String>> rules = new HashMap<>();

        rules.put("rule1", new SimpleRule<String>(
                "[\"a\"] contains \"a\"",
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
