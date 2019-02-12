# Bank Tech Test in JavaScript

### Approach
* Model App Structure
* User Stories
* Feature Test Each Desired Feature - Pass Test - Progress
* Self-Review - Refactor + Add Missing Concepts/Features

### Structure
* Independent Transaction Objects for each Transaction - All collated into one Account.

### Installation
* git clone https://github.com/jlaffbabs/bank-tech-test.git
* open SpecRunner.html
* Inspect webpage - access app through console

### Tests
* open SpecRunner.html

### Coverage
* npm install karma karma-coverage --save-dev
* npm install karma-chrome-launcher --save-dev
* npm install karma-jasmine --save-dev
* Run with: node_modules/.bin/karma start karma.conf.js

### Linting
* npm install standard --save-dev
* Run with: standard

### Requirements
* Should be able to interact with code via a REPL.
* Deposits, withdrawal.
* Account statement printing (date, amount, balance).
* Data can be kept in memory.

### User Stories
```
As a User,
So that I can keep my money in one place,
I want to be able to deposit.
```
```
As a User,
So that I can access my money,
I want to be able to withdraw.
```
```
As a User,
So that I can keep track of how much money I have,
I want to see my Account Statement.
```
```
As a User,
So that I can know when I am making transactions,
I want my withdrawals and deposits to be tied to dates.
```
