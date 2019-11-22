# Accordion list Application

This application gives you an expandable accordion list, with a custom expandable component which handles closing of the expanded accordion list when another list is opened/expanded.


## Table of Contents
- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/kiptechie/accordion-list.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Enjoy. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._



   



## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/kiptechie/accordion-list/blob/481fadcf0df3d77e703175721b8d53654b54f127/src/index.html#L20)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`

## Contributing
I am glad you’re interested in `accordion-list`, and I’d love to see where you take it. If you would wish to contribute code to this project you can do so through GitHub by Forking the Repository and creating a Pull Request.

When submitting code, please make every effort to follow existing conventions and style in order to keep the code as readable as possible. I look forward to you submitting a Pull Request.

Thanks, and please do take it for a joyride!


`Serem Timothy`


## License

```text
MIT License

Copyright (c) 2019 Timothy Serem

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


