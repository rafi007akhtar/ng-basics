# commands

This MD file contains a list of all the angular commands I have used from time to time for this repo.

## Getting started

- Installing Angular CLI
	```sh
	sudo apt install node
	sudo apt install npm
	npm install -g typescript
	npm install -g @angular/cli
	```

- Create a new project
    ```sh
    ng new projectname
    ```

- Run the current on a localhost
    ```sh
    ng serve
    ```

- Create a new component
	```sh
	cd src/app  # navigate to the app directory, then enter:
	ng generate component comp  # replace 'comp' by with component name

	# OR use this shorthand:
	ng g c comp  # replace 'comp' with component name
	```

- Create a custom pipe
	```sh
	cd src/app  # navigate to the app directory, then enter:
	ng generate pipe pipename

	# OR use this shorthand:
	ng g pipe pipename
	```

