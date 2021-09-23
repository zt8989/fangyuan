package com.olymtech;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ConcurrentRule<T> implements Rule<List<T>> {
    private List<Rule<T>> rules;
    private List<Rule<T>> validRules = new ArrayList<>();

    ConcurrentRule(List<Rule<T>> rules){
        this.rules = rules;
    }

    public boolean evaluate(final HashMap<String, Object> ctx) {
        this.validRules = this.rules.stream().filter(rule -> rule.evaluate(ctx)).collect(Collectors.toList());
        return this.validRules.size() > 0;
    }

    public List<T> execute(){
        return this.validRules.stream().map(rule -> rule.execute()).collect(Collectors.toList());
    }
}
