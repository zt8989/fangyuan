package com.olymtech;

import java.util.Map;

public abstract class AbstractRule<T> implements Rule<T>{
    protected Rule<T> rule;

    AbstractRule(Rule<T> rule) {
        this.rule = rule;
    }

    @Override
    public boolean evaluate(Map<String, Object> ctx) {
        return rule.evaluate(ctx);
    }

    @Override
    public T execute() {
        return rule.execute();
    }
}
