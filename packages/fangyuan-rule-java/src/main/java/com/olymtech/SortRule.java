package com.olymtech;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class SortRule<T> implements Rule<T> {
    private List<Rule<T>> rules;
    private Optional<Rule<T>> rule = Optional.empty();

    SortRule(List<Rule<T>> rules){
        this.rules = rules;
    }

    public boolean evaluate(final HashMap<String, Object> ctx) {
        this.rule = this.rules.stream().filter(rule -> rule.evaluate(ctx)).findFirst();
        return this.rule.isPresent();
    }

    public T execute(){
        return this.rule.map(value -> value.execute()).orElse(null);
    }
}
