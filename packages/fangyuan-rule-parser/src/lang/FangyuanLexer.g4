/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2020 by Martin Mirchev
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Project : sqlite-parser; an ANTLR4 grammar for SQLite https://github.com/bkiers/sqlite-parser
 * Developed by : Bart Kiers, bart@big-o.nl
 */

// $antlr-format alignTrailingComments on, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments off, useTab off
// $antlr-format allowShortRulesOnASingleLine on, alignSemicolons ownLine

lexer grammar FangyuanLexer;
import JavaLexer;

BIND_PARAMETER_: '$' IDENTIFIER;

RULESET: 'ruleset' | '规则集';
RULE: 'rule' | '规则';
WHEN: 'when' | '当';
THEN: 'then' | '那么';
END: 'end' | '结束';
NAMESPACE: 'namespace' | '命名空间';

AND_: 'and';
OR_: 'or';
NOT_: 'not';

IS_: 'is';
IN_: 'in';
LIKE_: 'like';
MATCH_: 'match';
REGEXP_: 'regexp';
ISNULL_: 'isnull';
NOTNULL_: 'notnull';
NULL_: NULL_LITERAL;

JSON_NUMBER: FLOAT_LITERAL | Digits;