package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ConcurrentRule<T> implements Rule<List<T>> {
    private Map<String, Rule<T>> rules;
    private Map<String, Rule<T>> validRules = new HashMap<>();

    ConcurrentRule(Map<String, Rule<T>> rules){
        this.rules = rules;
    }

    @Override
    public boolean evaluate(final Map<String, Object> ctx) {
        this.validRules = this
                .rules
                .entrySet()
                .stream()
                .filter(rule -> rule.getValue().evaluate(ctx))
                .collect(
                        Collectors.toMap(entry -> entry.getKey(), entry -> entry.getValue())
                );
        return this.validRules.size() > 0;
    }

    @Override
    public List<T> execute(){
        return this.validRules.values().stream().map(rule -> rule.execute()).collect(Collectors.toList());
    }
}
