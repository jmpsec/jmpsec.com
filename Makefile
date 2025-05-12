.PHONY: all serve

all: serve

# Serve website locally
serve:
	npx http-server web/ -o index.html

# Make default the English version for the website
web-en:
	@rm -Rf web/index.html
	@cp web/index-en.html web/index.html

# Make default the Spanish version for the website
web-es:
	@rm -Rf web/index.html
	@cp web/index-es.html web/index.html

# Make default the French version for the website
web-fr:
	@rm -Rf web/index.html
	@cp web/index-fr.html web/index.html

# Make default the Catalan version for the website
web-cat:
	@rm -Rf web/index.html
	@cp web/index-cat.html web/index.html
