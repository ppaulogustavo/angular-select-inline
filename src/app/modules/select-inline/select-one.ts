import { InlineSelect } from './select-inline.interface';
import { Option } from './option';

export class SelectOne implements InlineSelect {

    toggleOption(selectedOption: Option, options: Option[]): void {
        options.forEach(option => option.selected = false);
        selectedOption.selected = true;
    }

}
