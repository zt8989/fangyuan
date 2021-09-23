/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 by Bart Kiers
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
 * Developed by: Bart Kiers, bart@big-o.nl Martin Mirchev, marti_2203@abv.bg Mike Lische,
 * mike@lischke-online.de
 */

// $antlr-format alignTrailingComments on, columnLimit 130, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments off
// $antlr-format useTab off, allowShortRulesOnASingleLine off, allowShortBlocksOnASingleLine on, alignSemicolons ownLine

parser grammar FangyuanParser;

options {
    tokenVocab = FangyuanLexer;
}

parse:
    packageDeclaration? macroDeclaration* attribute* declaration* EOF
;

macroDeclaration:
    AT IDENTIFIER (COLON IDENTIFIER)? LBRACE STRING_LITERAL+ RBRACE
;

packageDeclaration:
    PACKAGE (IDENTIFIER DOT)* IDENTIFIER
;

declaration:
    ruleDeclaration
    | rulesetDeclaration
;

rulesetDeclaration:
    RULESET STRING_LITERAL attribute* ruleDeclaration+ END
;

ruleDeclaration:
    RULE STRING_LITERAL attribute* WHEN ruleLHS THEN ruleRHS END
;

ruleLHS:
    condition*
;

condition:
    logistics? (BIND_PARAMETER_ COLON)? IDENTIFIER LPAREN expr (COMMA expr)* RPAREN
;

logistics:
    AND
    | OR
    | NOT_
;

ruleRHS:
    json (COMMA json)*
;

attribute:
    IDENTIFIER value
;

json:
    value
;

obj:
    LBRACE pair RBRACE
    | LBRACE RBRACE
;

pair:
    STRING_LITERAL COLON value
;

arr:
    LBRACK value (COMMA value)* RBRACK
    | LBRACK RBRACK
;

value:
    STRING_LITERAL
    | JSON_NUMBER
    | obj
    | arr
    | BOOL_LITERAL
    | NULL_LITERAL
    | BIND_PARAMETER_
;

/*
 SQLite understands the following binary operators, in order from highest to lowest precedence:
    ||
    * / %
    + -
    << >> & |
    < <= > >=
    = == != <> IS IS NOT IN LIKE GLOB MATCH REGEXP
    AND
    OR
 */
expr:
    literal_value
    | variableDeclaration
    | prefix = ('+' | '-' | '++' | '--') expr
    | prefix = ('~' | '!') expr
    | expr bop = ('*' | '/' | '%') expr
    | expr bop = ('+' | '-') expr
    | expr bop = ('<=' | '>=' | '>' | '<') expr
    | expr bop = ('==' | '!=' | IN_ | INCLUDES | MATCH_) expr
    | expr bop = '&' expr
    | expr bop = '^' expr
    | expr bop = '|' expr
    | expr bop = '||' expr
    | expr bop = '&&' expr
    | expr bop = OR_ expr
    | expr bop = AND_ expr
    | LPAREN expr (COMMA expr)* RPAREN
    | expr NOT_? (IN_ | INCLUDES | MATCH_) expr
;

variableDeclaration:
    (BIND_PARAMETER_ COLON)? (any_name DOT)* any_name
;

literal_value:
    value
    | BIND_PARAMETER_
;

unary_operator:
    SUB
    | ADD
    | TILDE
    | NOT_
;

any_name:
    IDENTIFIER
    | STRING_LITERAL
    | LBRACK STRING_LITERAL RBRACK
;
