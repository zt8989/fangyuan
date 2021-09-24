package com.olymtech;

import java.util.Map;

public interface Rule<T> {
    boolean evaluate(Map<String, Object> ctx);

    boolean evaluate(Object ctx);

    T execute();
}
