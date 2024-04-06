// @ts-ignore
module.exports = {
    plugins: {
        'html-reporter/hermione': {
            enabled: true
        },
    },

    sets: {
        desktop: {
            files: 'src/tests/**/*.hermione.ts'
        }
    },

    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};