import { InlineSelect } from './select-inline.interface';
import { Option } from './option';

export class SelectOne implements InlineSelect {

    toggleOption(selectedOption: Option, options: Option[]): void {
        selectedOption.selected = !selectedOption.selected;
        options.filter(option => option.name != selectedOption.name)
            .forEach(option => option.selected = false);
    }

}
