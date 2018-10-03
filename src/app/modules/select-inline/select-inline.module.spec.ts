import { SelectInlineModule } from './select-inline.module';

describe('SelectInlineModule', () => {
  let selectInlineModule: SelectInlineModule;

  beforeEach(() => {
    selectInlineModule = new SelectInlineModule();
  });

  it('should create an instance', () => {
    expect(selectInlineModule).toBeTruthy();
  });
});
