# CRC-32 Utils

This mini-project was inspired by the [GHS Infotronic Online CRC Calculation](http://www.ghsi.de/pages/subpages/Online%20CRC%20Calculation/).
While there are many other websites that can perform such simple calculations, I particularly liked that this one kept the polynomial and message in the query parameters, allowing specific inputs, and thus the corresponding outputs, to be easily shared with a single hyperlink.
However, I was unable to find a similar site to calculate CRC-32 checksum using query parameters.

Many documents are available describing the CRC-32 calculation, as well as simple existing implementations in nearly every language easily available.
For example, the [tahapaksu.com Online CRC Calculation](https://www.tahapaksu.com/crc/) page used the few lines of JavaScript needed to calculate a CRC-32 (as well as several other) checksum.

It was thus trivial to implement the CRC-32 calculation in JavaScript in a single HTML file which used the query parameters as desired.
I decided to take this just one small step forward and implement the functions in TypeScript (which I had yet to use) and write a few tests (primarily to help me better understand the CRC algorithm).

```sh
# Install
% npm install

# Compile
% tsc --project tsconfig.json

# Run tests
% npm run test
```
