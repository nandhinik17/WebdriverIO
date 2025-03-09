import '@wdio/globals/types';

declare global {
    namespace WebdriverIO {
        interface Browser {
              getTitleAndLog: () => Promise<string>;
        }
    }
}

export {};
