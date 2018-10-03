import { InlineSelectModule } from './inline-select.module';

describe('InlineSelectModule', () => {
  let inlineSelectModule: InlineSelectModule;

  beforeEach(() => {
    inlineSelectModule = new InlineSelectModule();
  });

  it('should create an instance', () => {
    expect(inlineSelectModule).toBeTruthy();
  });
});
