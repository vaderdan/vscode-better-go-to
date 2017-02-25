# Better Go To - code folding

This extension displays region code sections (ala XCode, Eclipes) comments in 'Go to Symbol' panel.
It will help you quickly scan longer files.

## What does it looks like?
![Like this](https://raw.githubusercontent.com/vaderdan/vscode-better-go-to/master/screenshot.png "Screenshot")

## Ok I'm sold how do I try it?
You can find it on VSCode Marketplace
shift+cmd+p + install extension -> search for Better Go To

## FAQ
### How do I know it's working?
Simply open your source file.
Add somewhere special comment (for Swift):

`// MARK: todo comes here`

Add somewhere special comment (for C#):

`#region todo comes here`

Add somewhere special comment (for C++):

`#pragma todo comes here`

Add somewhere special comment (for JAVA):

`//region todo comes here`

Then open 'Go to Symbol' panel - shift+cmd+o
and you will see the special comment displayed as header separator between the code method names

**Enjoy!**


## License

The original grammar files are licenced under [FB's licence](https://raw.githubusercontent.com/flowtype/flow-for-vscode/master/LICENSE)

The rest of the repo is licenced under MIT

The MIT License (MIT)
Copyright (c) 2017 Danny Lazarov
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Changelog
0.0.1 - Initial release

