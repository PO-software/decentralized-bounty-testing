# decentralized-bounty-testing

A small site used to test the decentralized bounty platform. Its issues are the problems that bounties pay for, and hunters fix them through pull requests to this repository.

## Run it

It needs Node.js 18 or later and has no dependencies.

```sh
pnpm start
```

The home page is on http://localhost:3000. Set `PORT` to use another port.

## Submit a fix

1. Fork the repository and fix the issue in a branch.
2. Open a pull request to `main`. Its title or description references the issue (`#1`, for example), and its description holds the wallet you use on the bounty platform.
3. Submit the pull request's address and its commit on the bounty's page.
