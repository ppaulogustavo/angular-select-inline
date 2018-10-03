import { InlineSelect } from './select-inline.interface';
import { Option } from './option';

export class SelectMulti implements InlineSelect {

    toggleOption(selectedOption: Option, options: Option[]): void {
        selectedOption.selected = !selectedOption.selected;
    }

}
