package com.olymtech;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class SortRule<T> implements Rule<T> {
    private Map<String, Rule<T>> rules;
    private Optional<Rule<T>> rule = Optional.empty();

    SortRule(Map<String, Rule<T>> rules){
        this.rules = rules;
    }

    public boolean evaluate(final HashMap<String, Object> ctx) {
        this.rule = this
                .rules
                .entrySet()
                .stream()
                .filter(rule -> rule.getValue().evaluate(ctx))
                .findFirst()
                .map(entry -> entry.getValue());
        return this.rule.isPresent();
    }

    public T execute(){
        return this.rule.map(value -> value.execute()).orElse(null);
    }
}
