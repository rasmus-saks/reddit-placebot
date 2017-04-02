# Reddit Place Bot

This is a bot based on [Reddit Place Bot](https://github.com/Zequez/placebot-argentina-target) for the /r/eesti drawing on /r/place.


## Installation

You need to have [NodeJS installed](https://nodejs.org)

```
git clone https://github.com/zequez/reddit-place-bot
cd reddit-place-bot
npm install
```

## Configuration

Change `users.example.json` to `users.json` and add your username and password
of your account and all your throwaways.


## Usage

```
  npm run start
```

It'll keep keep drawing forever and if it can't draw anymore it's gonna
wait until something breaks and fix it.
