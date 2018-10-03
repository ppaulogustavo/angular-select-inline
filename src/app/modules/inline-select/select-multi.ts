import { InlineSelect } from "./inline-select.interface";
import { Option } from "./option";

export class SelectMulti implements InlineSelect {

    toggleOption(selectedOption: Option, options: Option[]): void {
        selectedOption.selected = !selectedOption.selected;
    };

}