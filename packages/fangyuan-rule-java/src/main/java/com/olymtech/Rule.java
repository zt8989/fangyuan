package com.olymtech;

import java.util.HashMap;

public interface Rule<T> {
    boolean evaluate(HashMap<String, Object> ctx);

    T execute();
}
