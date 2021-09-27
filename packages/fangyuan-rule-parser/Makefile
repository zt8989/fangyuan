build: 
	$(MAKE) -C src/lang build

build-js: 
	yarn antlr4ts -visitor src/lang/FangyuanLexer.g4
	yarn antlr4ts -visitor src/lang/FangyuanParser.g4

run: 
	[ ! -e dist ] || rm -r dist 
	yarn tsc
	node dist/cli.js gen:js test/RuleTest.drl

run-java: 
	[ ! -e dist ] || rm -r dist 
	yarn tsc
	node dist/cli.js gen:java ../fangyuan-rule-java/src/**/*.drl

clean: 
	$(MAKE) -C packages/fangyuan-rule-parser/src/lang clean

