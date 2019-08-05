# IFrame Cookie Communication

The purpose of this repo is to showcase cookie communication between a parent domain (example myprivatedomain.com) with a subdomain loaded through an iframe.

## Prerequisites

You must have node and angular-cli installed.

### Node and npm

To check the installation run:
`node -v`
If it doesn't return a version, install it either from [NodeJS Official Website](https://nodejs.org/) or from the command line (depending on your operating system).

### Angular CLI

If the command `ng version` doesn't work, install it from the command line with:
`npm install -g @angular/cli`

## Installation

After cloning the repo, go into parent and child and run `npm install`
Modify your hosts file (e.g. on MacOS the hosts file is under `etc/hosts`) and add the following lines:
> localhost myprivatedomain.com

> localhost dev.myprivatedomain.com

This will map your localhost to a domain and a subdomain respectively. You can choose any name for it, but it will be used later when running the app.
Go into `parent/src/app/main/iframe/iframe.component.html` and replace the `src` attribute value with your chosen subdomain (include the protocol also, e.g. `http://dev.myprivatedomain.com`)

## Running the example
First, go into parent folder and run `ng serve --public-host=myprivatedomain.com` and keep the terminal open
After, go into the child folder and run `ng serve --port=4279 --public-host=dev.myprivatedomain.com` and keep the terminal open
Point your favorite browser to myprivatedomain.com and the app should load.


## Testing scenarios

**Note: After each scenario, refresh your browser to see the full effect**

#### Scenario 1: Pass a cookie from parent to child
In `Zone 1`, write any value in the input and press the "Store cookie" button. Afterwards, press the "Force child to get cookie" from `Zone 3`. This will send an event to the iframe and in that event, the child iframe will read the cookie store from `Zone 1`
This will appear in `Zone 4` (label "Loaded cookie from parent:") and will also modify `Zone 3` with the event.

#### Scenario 2: Read cookie in child
In `Zone 1`, write any value in the input and press the "Store cookie" button. Afterwards, go into `Zone 4` from the iframe and click "Get parent cookie and notify parent of the event". The child will read the cookie stored from the parent and will also send a message to the parent to notify it (see `Zone 3`).

#### Scenario 3: Read cookie in parent
Go into the iframe and click on the "Login" tab. Write anything in the "Username" input and hit "Submit". Now go into `Zone 2` and click "Get child cookie". This will read the cookie stored from the child and show it near the label "Loaded cookie from child".

