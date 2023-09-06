describe('Static', () => {
    class Configuration {
        static NAME: string = "Belajar TypeScript";
        static VERSION: string = "1.0.0";
        static readonly DESCRIPTION: string = "Belajar TypeScript dengan Kasus Sederhana";
    }

    it('should support static class', () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.DESCRIPTION);
    });
});