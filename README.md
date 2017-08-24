# JoaQUEEN Project

## Installing the Server

#### macOS: 	
##### Option 1 - Homebrew:

If you dont have it already, install HomeBrew running this command:

	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Than install Elixir

	brew update && brew install elixir

##### Option 2 - Macports:
Download Macports here: https://www.macports.org/install.php

Install Elixir with the command:

	sudo port install elixir


#### Fedora
	dnf install elixir

#### Ubuntu and Debian:
	wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && sudo dpkg -i erlang-solutions_1.0_all.deb
	sudo apt-get update
	sudo apt-get install esl-erlang elixir

### Running:
	We are all set! Run your Phoenix application:

    		$ cd serverAPI
    		$ mix phoenix.server

	You can also run your app inside IEx (Interactive Elixir) as:

    		$ iex -S mix phoenix.server



#############
