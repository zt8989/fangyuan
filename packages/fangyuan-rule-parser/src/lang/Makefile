build: 
	antlr -o .antlr FangyuanLexer.g4
	antlr -o .antlr FangyuanParser.g4
	javac -classpath /opt/homebrew/Cellar/antlr/4.9.2/antlr-4.9.2-complete.jar:. .antlr/*.java

build-js: 
	antlr -Dlanguage=JavaScript -visitor FangyuanLexer.g4
	antlr -Dlanguage=JavaScript -visitor FangyuanParser.g4

run: 
	cd .antlr && \
	grun Fangyuan parse -gui

clean: 
	rm -rf .antlr

