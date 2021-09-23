package com.olymtech;

import org.mvel2.MVEL;

import java.io.Serializable;
import java.util.HashMap;

public class SimpleRule<T> implements Rule<T>{
    private Serializable evaluateExpress;
    private Serializable executeExpress;
    private HashMap<String, Object> ctx;
    final Class<T> typeParameterClass;

    SimpleRule(String evaluateExpress, String executeExpress, Class<T> typeParameterClass){
        this.evaluateExpress = MVEL.compileExpression(evaluateExpress);
        this.executeExpress = MVEL.compileExpression(executeExpress);
        this.typeParameterClass = typeParameterClass;
    }

    @Override
    public boolean evaluate(HashMap<String, Object> ctx) {
        this.ctx = ctx;
        return MVEL.executeExpression(this.evaluateExpress, ctx, Boolean.class);
    }

    @Override
    public T execute() {
        return MVEL.executeExpression(this.executeExpress, ctx, typeParameterClass);
    }
}
