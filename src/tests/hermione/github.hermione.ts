describe('github', function() {
    it('should check repository name', async ({ browser }) => {
        await browser.url('http://localhost:6006/iframe.html?args=&id=example-app--base&viewMode=story');

        await browser.assertView('app', '.App');
    });
});