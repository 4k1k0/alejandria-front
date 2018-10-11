import { SitioModule } from './sitio.module';

describe('SitioModule', () => {
  let sitioModule: SitioModule;

  beforeEach(() => {
    sitioModule = new SitioModule();
  });

  it('should create an instance', () => {
    expect(sitioModule).toBeTruthy();
  });
});
