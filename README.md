# Hew Web

[![Build Status](https://travis-ci.org/ayan4m1/hew-web.svg?branch=master)](https://travis-ci.org/ayan4m1/hew-web)

## Features

- Control color and brightness of the [Hew D1](https://github.com/ayan4m1/hew-d1)
- Update multiple/specific devices simultaneously

## Usage

A hosted instance of this application is [available here](https://control.hew-iot.com/). Because the devices currently use HTTP, you will need to enable "mixed content" for this site.

How to enable mixed content in popular browsers:

- [Chrome](https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/mixed-content.html)
- [Firefox](https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox#w_unblock-mixed-content)

If you'd prefer to run the application locally, ensure you have Node 12+ installed and run the following in the source root:

```sh
> npm install
> npm start
```

A browser window will open to the application. Because the server will be running over HTTP, you don't have to worry about mixed content issues when running locally.

## Configuration

Use the devices page to manage devices. This data will be stored in browser localStorage - be aware that any extensions you are running or malicious JavaScript with access to localStorage will have access to unencrypted passphrases!

## Roadmap

- Overcome mixed-content limitations using TLS on devices
- Add Apple HomeKit / Alexa / Google Home integration
- Animations and gradients
