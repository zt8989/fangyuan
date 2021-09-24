package com.olymtech;

import org.mvel2.MVEL;

import java.io.Serializable;
import java.util.Map;

public class SimpleRule<T> implements Rule<T>{
    private Serializable evaluateExpress;
    private Serializable executeExpress;
    private Map<String, Object> mapVars;
    private Object objVars;
    final Class<T> typeParameterClass;

    SimpleRule(String evaluateExpress, String executeExpress, Class<T> typeParameterClass){
        this.evaluateExpress = MVEL.compileExpression(evaluateExpress);
        this.executeExpress = MVEL.compileExpression(executeExpress);
        this.typeParameterClass = typeParameterClass;
    }

    @Override
    public boolean evaluate(Map<String, Object> ctx) {
        this.mapVars = ctx;
        this.objVars = null;
        return MVEL.executeExpression(this.evaluateExpress, ctx, Boolean.class);
    }

    @Override
    public boolean evaluate(Object ctx) {
        this.mapVars = null;
        this.objVars = ctx;
        return MVEL.executeExpression(this.evaluateExpress, ctx, Boolean.class);
    }

    @Override
    public T execute() {
        return MVEL.executeExpression(this.executeExpress, this.objVars, this.mapVars,typeParameterClass);
    }
}
