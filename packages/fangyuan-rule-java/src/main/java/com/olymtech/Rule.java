package com.olymtech;

import java.util.Map;

public interface Rule<T> {
    boolean evaluate(Map<String, Object> ctx);
    T execute();
}
