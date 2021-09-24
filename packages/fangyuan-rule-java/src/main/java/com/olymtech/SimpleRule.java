package com.olymtech;

import org.mvel2.MVEL;
import org.mvel2.ParserContext;
import org.mvel2.integration.VariableResolverFactory;
import org.mvel2.integration.impl.MapVariableResolverFactory;

import java.io.Serializable;
import java.util.Map;

public class SimpleRule<T> implements Rule<T>{
    private Serializable evaluateExpress;
    private Serializable executeExpress;
    private Map<String, Object> mapVars;
    final Class<?> typeParameterClass;

    SimpleRule(String evaluateExpress, String executeExpress, Class<?> typeParameterClass){
        ParserContext ctx = new ParserContext();
        ctx.addPackageImport("java.util.regex");
        ctx.addPackageImport("org.javatuples");
        this.evaluateExpress = MVEL.compileExpression(evaluateExpress, ctx);
        this.executeExpress = MVEL.compileExpression(executeExpress, ctx);
        this.typeParameterClass = typeParameterClass;
    }

    public static VariableResolverFactory getMvelFactory() {
        VariableResolverFactory functionFactory = new MapVariableResolverFactory();
        MVEL.eval(
                "def match(matchString, regexp){ " +
                        "java.util.regex.Pattern p = java.util.regex.Pattern.compile(regexp);" +
                        "java.util.regex.Matcher m = p.matcher(matchString); " +
                        "return m.find();" +
                        "};" +
                        "def includes(arr, find){" +
                        "return arr contains find;" +
                        "}" +
                        "def inArrayOrObject(find, arr){" +
                        "return includes(arr, find);" +
                        "}",
                functionFactory);
        return functionFactory;
    }

    @Override
    public boolean evaluate(Map<String, Object> ctx) {
        this.mapVars = ctx;
        return MVEL.executeExpression(this.evaluateExpress, ctx, getMvelFactory(), Boolean.class);
    }

    @Override
    public T execute() {
        return (T)MVEL.executeExpression(this.executeExpress, this.mapVars, getMvelFactory(), typeParameterClass);
    }
}
